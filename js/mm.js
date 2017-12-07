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
				this.style.height = opts.minHeight + 'rem';
				if(this.scrollHeight > opts.minHeight) {
					if(opts.maxHeight && this.scrollHeight > opts.maxHeight) {
						height = opts.maxHeight;
						style.overflowY = 'scroll';
					} else {
						height = this.scrollHeight;
						style.overflowY = 'hidden';
					}
					style.height = height + 'rem';
				}
			});
		});
	};
})(Zepto);

