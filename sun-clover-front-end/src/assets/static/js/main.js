function startLoad() {
  $("html, body").css({
    overflow: "hidden",
    height: "100%"
  });
  $("#wrap-loader").show();
}

function endLoad() {
  $("#wrap-loader").hide();
  $("html, body").css({
    overflow: "auto",
  });
}

function PushMessage(type, value, isResponse) {
  if (isResponse) {
    CefSharp.PostMessage({ "Type": type, "Value": value });
  }
}
