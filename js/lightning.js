(function() {
  document.onmousemove = handleMouseMove;
  function handleMouseMove(event) {
    var eventDoc, doc, body;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
        (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
        (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }

    // Use event.pageX / event.pageY here

    var c = document.getElementById("home");
    var ctx = c.getContext("2d");

    var centerX = ctx.canvas.width.valueOf() / 2;
    var centerY = ctx.canvas.height.valueOf() / 2;

    ctx.clearRect(0, 0, ctx.width, ctx.height);
    console.log(ctx.height)
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(event.pageX, event.pageY);
    ctx.stroke();
  }
})();
