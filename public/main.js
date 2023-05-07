var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var trash = document.getElementsByClassName("fa-trash");


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const workOut = this.parentNode.parentNode.parentNode.childNodes[1].textContent
        const bodyPart = this.parentNode.parentNode.parentNode.childNodes[3].textContent
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'workOut': workOut,
            'bodyPart': bodyPart
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
