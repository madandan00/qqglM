(function($) {
	$.fn.autoTextarea = function(options) {
		var defaults = {
			maxHeight: null,
			minHeight: $(this).height()
		};
		//alert(defaults.minHeight)
		var opts = $.extend({}, defaults, options);
		//alert(opts.minHeight)
		return $(this).each(function() {
			$(this).bind("paste cut keydown keyup ", function() {
				var height, style = this.style;
				this.style.height = defaults.minHeight + 'px';
				
				if(this.scrollHeight >defaults.minHeight) {
					if(opts.maxHeight && this.scrollHeight > opts.maxHeight*100) {
						height = opts.maxHeight*100;
						style.overflowY = 'scroll';
					} else {
						height = this.scrollHeight;
						style.overflowY = 'hidden';
					}
					style.height = height + 'px';
				}
			});
		});
	};
})(Zepto);

