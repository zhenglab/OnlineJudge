define("pager",["avalon"],function(e){var t=function(){};e.component("ms:pager",{$template:"页数: {{ currentPage }}/{{ totalPage }} <button ms-class=\"{{ currentPage==1?'btn btn-primary disabled':'btn btn-primary' }}\" ms-click=\"_getPrevPage\">上一页</button>  <button ms-class=\"{{ currentPage==totalPage?'btn btn-primary disabled':'btn btn-primary' }}\" ms-click=\"_getNextPage\">下一页</button>",currentPage:1,totalPage:1,_getPrevPage:t,_getNextPage:t,$init:function(e,t){e._getPrevPage=function(){e.currentPage>1&&(e.currentPage--,e.getPage(e.currentPage))},e._getNextPage=function(){e.currentPage<e.totalPage&&(e.currentPage++,e.getPage(e.currentPage))}},$ready:function(e,t){t.msRetain=!0,e.getPage(1)}})});