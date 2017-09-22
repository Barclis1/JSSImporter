$(document).ready(function() {
  $("[id^=container_-]").hide();
  $("#btn_1").addClass("bwactive");
  $("[id^=btn]").click(function() {
    tmp_id = $(this).attr("id").split("_")[1];
    $("[id^=container]").hide();
    $("[id^=btn]").removeClass("bwactive");
    $("#container_" + tmp_id).show();
    $("#btn_" + tmp_id).addClass("bwactive");
  });
});
