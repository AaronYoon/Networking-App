function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  function closeForum() {
    document.getElementById("myForm").style.display = "none";
  }

  /*
  $('#post').click(function() {
      $('#forumbox').append($('<li class="flex-item">').text('Hello'));
      $(this).insertAfter($('[class="flex-item"]').last());
  });

  */

  function postForum(){
    $('#forumbox').append($('<li class="flex-item">').text('Hello'));
    $(this).insertAfter($('[class="flex-item"]').last());
  } 