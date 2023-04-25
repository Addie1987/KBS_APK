(function ($) {
  $(function () {
    $('#myExampleBestResponsiveTab1').laraGemsBestResponsiveTabs({
      container: $('#myExampleTabsContent')
    });
    $('#myExampleBestResponsiveTab1').on('lgTabItem:toogle', function (event, previous_item, next_item) {
      console.log('Previous item', previous_item);
      console.log('Next item', next_item);
    });
  });
})(jQuery);