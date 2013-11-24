 $(function() {
    $( "#tabs" ).tabs();
  });

  $(function() {
    $( ".draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        scope:  "animationContainer";
        accept: "img";
        $(ui.draggable).draggable({"disabled":true});
       /* $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" ); */
      }
    });
  });