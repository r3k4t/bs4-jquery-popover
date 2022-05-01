$(function(){
  $(".btn-primary").click(function(){
    $("[data-toggle='popover']").popover('show');
  });
  $(".btn-warning").click(function(){
    $("[data-toggle='popover']").popover('hide');
  });
  $(".btn-success").click(function(){
    $("[data-toggle='popover']").popover('toggle');
  });
  $(".btn-danger").click(function(){
    $("[data-toggle='popover']").popover('dispose');
  });
  $("[data-toggle='popover']").on('show.bs.popover', function(){
    alert('The popover is about to be shown.');
  });
  $("[data-toggle='popover']").on('shown.bs.popover', function(){
    alert('The popover is now fully shown.');
  });
  $("[data-toggle='popover']").on('hide.bs.popover', function(){
    alert('The popover is about to be hidden.');
  });
  $("[data-toggle='popover']").on('hidden.bs.popover', function(){
    alert('The popover is now hidden.');
  });
});