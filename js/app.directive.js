angular
  .module('app')
  .directive('li', function() {
    return {
      restrict: 'E',
      link: function(scope, elem, attr, ctrl) {
        elem.on('click', function() {
          elem.parent().find('li').removeClass('active');
          elem.addClass('active');
        });
      }
    };
  });
