angular.module('mc.resizer', []).directive('resizer', function($window, $document) {

	return function($scope, $element, $attrs) {

		// Find left and right containers	
		var resizerLeft,
			resizerRight,
			resizerWidth = 2,
			resizerMin = 0,
			resizerMax = 0;

		var maxWidth = $window.innerWidth;
		var maxHeight = $window.innerHeight;

		resizerWidth = parseInt($window.getComputedStyle($element[0], null).getPropertyValue('width')) || resizerWidth;

		if (angular.isDefined($attrs.resizerMin)) {
			resizerMin = parseInt($attrs.resizerMin);
		}
		
		if (angular.isDefined($attrs.resizerMax)) {
			resizerMax = parseInt($attrs.resizerMax);
		}

		$element.on('mousedown', function(event) {
			var elementStyleMap;

			event.preventDefault();

			$document.on('mousemove', mousemove);
			$document.on('mouseup', mouseup);

			if ($attrs.resizer == 'vertical') {

				// Find left and right containers	
				if (angular.isUndefined(resizerLeft)) {
					resizerLeft = 
						angular.element($document[0].documentElement.querySelector($attrs.resizerLeft));
				}
				
				if (angular.isUndefined(resizerRight)) {
					resizerRight = 
						angular.element($document[0].documentElement.querySelector($attrs.resizerRight));
				}

				// Resizer Min Left
				elementStyleMap = $window.getComputedStyle(resizerLeft[0], null);
				var leftBoundsLeft = parseInt(elementStyleMap.getPropertyValue('left'));
				//console.log(leftBoundsLeft);
				
				if (leftBoundsLeft && resizerMin < leftBoundsLeft) {
					resizerMin = leftBoundsLeft;
				}
				
				if (!resizerMin || resizerMin < 0) {
					resizerMin = 0;
				}
				// Resizer Min Left

				// Resizer Max Left
				elementStyleMap = $window.getComputedStyle(resizerRight[0], null);
				var rightBoundsRight = parseInt(elementStyleMap.getPropertyValue('right'));
				rightBoundsRight = maxWidth - rightBoundsRight;
				
				//console.log(rightBoundsRight);
				if (!resizerMax || resizerMax > (rightBoundsRight - resizerWidth - 1)) {
					resizerMax = rightBoundsRight - resizerWidth;
				}
				// Resizer Max Left

			} else {

			}
		});

		function mousemove(event) {

			if ($attrs.resizer == 'vertical') {
				// Handle vertical resizer

				var x = event.pageX;
				
				if (resizerMax && x > resizerMax) {
					x = resizerMax;
				}

                if (resizerMin && x < resizerMin) {
					x = resizerMin;
				}

				//console.log('x: %s ', x);
				//console.log('moving direction: %s ', moveDirection);

				$element.css({
					left: x + 'px'
				});

                //var leftBounds = $($attrs.resizerLeft);    

				resizerLeft.css({
					width: x + 'px'
				});
                
				resizerRight.css({
					left: (x + resizerWidth) + 'px'
				});

			} else {
				// Handle horizontal resizer
				var y = window.innerHeight - event.pageY;

				$element.css({
					bottom: y + 'px'
				});

				$($attrs.resizerTop).css({
					bottom: (y + parseInt($attrs.resizerHeight)) + 'px'
				});
				$($attrs.resizerBottom).css({
					height: y + 'px'
				});
			}
		}

		function mouseup() {
			$document.unbind('mousemove', mousemove);
			$document.unbind('mouseup', mouseup);
		}
	};
});