/*
 * @Description: video2
 * @Author: 彭祥 (QQ:245803627)
 * @Date: 2018-12-05 16:41:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-02-27 11:02:47
 */
(function($) {

    $.anwidget("c.Video", {
        options: {
            left: 0,
            top: 0,
            width: 400,
            height: 300,
            source: "",
            autoplay: true,
			position: "absolute"
		},
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform", "object-fit"],
		_attrs: ["id", "src", "controls", "autoplay", "loop", "class", "muted", "poster", "preload", "playsinline", "data-setup", "webkit-playsinline", "x-webkit-airplay", "x5-playsinline", "x5-video-player-type", "x5-video-player-fullscreen", "x5-video-orientation"],
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "video" + _widgetID++ });
		},
		getCreateString: function() {
			// return "<div><video/></div>";
		 	return "<div style=\"pointer-events: all;\">\n" +
                "\t\t\t\t<video\n" +
                "\t\t\t\t\t\tid=\"my-player\"\n" +
                "\t\t\t\t\t\tclass=\"video-js vjs-big-play-centered\"\n" +
                "\t\t\t\t\t\tcontrols\n" +
                "\t\t\t\t\t\tplaysinline\n" +
                "\t\t\t\t\t\twebkit-playsinline\n" +
                "\t\t\t\t\t\tpreload=\"auto\"\n" +
                "\t\t\t\t\t\tposter=\"img/poster.jpg\"\n" +
                "\t\t\t\t\t\twidth=\"923\" height=\"519\"\n" +
                "\t\t\t\t\t\tdata-setup='{}'>\n" +
                "\t\t\t\t\t<source src=\"videos/v2(P16).mp4\" type=\"video/mp4\"></source>\n" +
                "\t\t\t\t\t<p class=\"vjs-no-js\">\n" +
                "\t\t\t\t\t\tTo view this video please enable JavaScript, and consider upgrading to a\n" +
                "\t\t\t\t\t\tweb browser that\n" +
                "\t\t\t\t\t\t<a href=\"http://videojs.com/html5-video-support/\" target=\"_blank\">\n" +
                "\t\t\t\t\t\t\tsupports HTML5 video\n" +
                "\t\t\t\t\t\t</a>\n" +
                "\t\t\t\t\t</p>\n" +
                "\t\t\t\t</video>\n" +
                "\t\t\t</div>"
		},
		getProperties: function() {
			return this._props;
		},
		attach: function() {
			if(this._attached)
				return;

			this._superApply(arguments);
			this._$div = $(this._element);
			this._$this = this._$div.find('video');

			this.update(true);
		},
		detach: function() {
			if(!this._$div)
				return;

			this._$div.remove();
			this._attached = false;
			this._$div = null;
			$(parent).trigger("detached", this.getEventData("detached"));
		},
		getAttributes: function() {
			return this._attrs;
		},
		show: function() {
			if(this._$div) this._$div.show();
		},
		hide: function() {
			if(this._$div) this._$div.hide();
		},
		applyAttributes: function($el, force) {
			this._superApply(arguments);
			if(!this._options["muted"]) {
				$el.removeAttr("muted");
			}
		},
		update: function(force) {
			if(!this._$div)
				return;

			var updateSize = force || this._dirty["width"] || this._dirty["height"];
			this.applyProperties(this._$div, force);
			this.applyAttributes(this._$this, force);

			if(updateSize) {
				// Copy the width and height from parent
				this._$this.css("width", this._$div.css("width"));
				this._$this.css("height", this._$div.css("height"));
			}
		}
    });
})(jQuery);
