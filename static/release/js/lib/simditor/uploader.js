(function(e,t){typeof define=="function"&&define.amd?define("simple-uploader",["jquery","simple-module"],function(n,r){return e.uploader=t(n,r)}):typeof exports=="object"?module.exports=t(require("jquery"),require("simple-module")):(e.simple=e.simple||{},e.simple.uploader=t(jQuery,SimpleModule))})(this,function(e,t){var n,r,i=function(e,t){function r(){this.constructor=e}for(var n in t)s.call(t,n)&&(e[n]=t[n]);return r.prototype=t.prototype,e.prototype=new r,e.__super__=t.prototype,e},s={}.hasOwnProperty;return n=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return i(n,t),n.count=0,n.prototype.opts={url:"",params:null,fileKey:"upload_file",connectionCount:3},n.prototype._init=function(){return this.files=[],this.queue=[],this.id=++n.count,this.on("uploadcomplete",function(t){return function(n,r){return t.files.splice(e.inArray(r,t.files),1),t.queue.length>0&&t.files.length<t.opts.connectionCount?t.upload(t.queue.shift()):t.uploading=!1}}(this)),e(window).on("beforeunload.uploader-"+this.id,function(e){return function(t){if(!e.uploading)return;return t.originalEvent.returnValue=e._t("leaveConfirm"),e._t("leaveConfirm")}}(this))},n.prototype.generateId=function(){var e;return e=0,function(){return e+=1}}(),n.prototype.upload=function(t,n){var r,i,s,o;n==null&&(n={});if(t==null)return;if(e.isArray(t)||t instanceof FileList)for(i=0,o=t.length;i<o;i++)r=t[i],this.upload(r,n);else if(e(t).is("input:file"))s=e(t).attr("name"),s&&(n.fileKey=s),this.upload(e.makeArray(e(t)[0].files),n);else if(!t.id||!t.obj)t=this.getFile(t);if(!t||!t.obj)return;e.extend(t,n);if(this.files.length>=this.opts.connectionCount){this.queue.push(t);return}if(this.triggerHandler("beforeupload",[t])===!1)return;return this.files.push(t),this._xhrUpload(t),this.uploading=!0},n.prototype.getFile=function(e){var t,n,r;return e instanceof window.File||e instanceof window.Blob?(t=(n=e.fileName)!=null?n:e.name,{id:this.generateId(),url:this.opts.url,params:this.opts.params,fileKey:this.opts.fileKey,name:t,size:(r=e.fileSize)!=null?r:e.size,ext:t?t.split(".").pop().toLowerCase():"",obj:e}):null},n.prototype._xhrUpload=function(t){var n,r,i,s;n=new FormData,n.append(t.fileKey,t.obj),n.append("original_filename",t.name);if(t.params){i=t.params;for(r in i)s=i[r],n.append(r,s)}return t.xhr=e.ajax({url:t.url,data:n,processData:!1,contentType:!1,type:"POST",beforeSend:function(){var e="csrftoken=",t=document.cookie.split(";");for(var n=0;n<t.length;n++){var r=t[n];while(r.charAt(0)==" ")r=r.substring(1);r.indexOf(e)!=-1&&(e=r.substring(e.length,r.length))}arguments[0].setRequestHeader("X-CSRFToken",e)},headers:{"X-File-Name":encodeURIComponent(t.name)},xhr:function(){var t;return t=e.ajaxSettings.xhr(),t&&(t.upload.onprogress=function(e){return function(t){return e.progress(t)}}(this)),t},progress:function(e){return function(n){if(!n.lengthComputable)return;return e.trigger("uploadprogress",[t,n.loaded,n.total])}}(this),error:function(e){return function(n,r,i){return e.trigger("uploaderror",[t,n,r])}}(this),success:function(n){return function(r){return n.trigger("uploadprogress",[t,t.size,t.size]),n.trigger("uploadsuccess",[t,r]),e(document).trigger("uploadsuccess",[t,r,n])}}(this),complete:function(e){return function(n,r){return e.trigger("uploadcomplete",[t,n.responseText])}}(this)})},n.prototype.cancel=function(e){var t,n,r,i;if(!e.id){i=this.files;for(n=0,r=i.length;n<r;n++){t=i[n];if(t.id===e*1){e=t;break}}}return this.trigger("uploadcancel",[e]),e.xhr&&e.xhr.abort(),e.xhr=null},n.prototype.readImageFile=function(t,n){var r,i;if(!e.isFunction(n))return;return i=new Image,i.onload=function(){return n(i)},i.onerror=function(){return n()},window.FileReader&&FileReader.prototype.readAsDataURL&&/^image/.test(t.type)?(r=new FileReader,r.onload=function(e){return i.src=e.target.result},r.readAsDataURL(t)):n()},n.prototype.destroy=function(){var t,n,r,i;this.queue.length=0,i=this.files;for(n=0,r=i.length;n<r;n++)t=i[n],this.cancel(t);return e(window).off(".uploader-"+this.id),e(document).off(".uploader-"+this.id)},n.i18n={"zh-CN":{leaveConfirm:"正在上传文件，如果离开上传会自动取消"}},n.locale="zh-CN",n}(t),r=function(e){return new n(e)},r});