(function ($) {
  "use strict";

  // drawer menu
  $(".open-submenu").on("click", function () {
    $(this).parent().siblings(".submenu-transform").addClass("active");
  });

  $(".btn-menu-back").on("click", function () {
    $(this).closest(".submenu-transform").removeClass("active");
  });

  // header search
  $(".icon-search, .search-close").on("click", function () {
    $(".search-wrapper").toggleClass("search-appear");
  });

  // quickview slider initiation
  $("#quickview-modal").on("shown.bs.modal", function (e) {
    $(".qv-large-slider").slick("setPosition");
    $(".qv-thumb-slider").slick("setPosition");
  });

  // increament-decreament button
  $(".qty-btn").on("click", function () {
    var qtyInput = $(this).parent().find("input");

    if ($(this).hasClass("inc-qty")) {
      qtyInput.val(parseInt(qtyInput.val()) + 1);
    } else if (qtyInput.val() >= 1) {
      qtyInput.val(parseInt(qtyInput.val()) - 1);
    }
  });

  /* --------------------------------------------------------
      newsletter popup
    -------------------------------------------------------- */
  // $(window).ready(function () {
  //   setTimeout(function () {
  //     $("#modal-subscribe").modal("show");
  //   }, 30000);
  // });
})(jQuery);
