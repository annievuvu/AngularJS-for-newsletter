// Menu bar

//Add Section

//Select All
function selectText( containerid ) {

   var node = document.getElementById( containerid );

   if ( document.selection ) {
       var range = document.body.createTextRange();
       range.moveToElementText( node  );
       range.select();
   } else if ( window.getSelection ) {
       var range = document.createRange();
       range.selectNodeContents( node );
       window.getSelection().removeAllRanges();
       window.getSelection().addRange( range );
   }
}

//Send to Server

(function() {
	var newsletter = angular.module('newsletter',['xeditable']);
});