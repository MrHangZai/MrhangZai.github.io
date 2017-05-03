(function(){
	var a = function(b) {
	    var c = this;
	    c.options = $.extend({
	        title: "",
	        content: "",
	        fullView: false,
	        duration: 400,
	        customClassName: "",
	        onOpen: function() {},
	        onClose: function() {}
	    }, b);
	    c._init()
	};
	a.prototype = {
	    constructor: a,
	    version: "0.0.1",
	    _init: function() {
	        var b = this;
	        b._preparePopupWrapper();
	        b._stopScroll();
	        b.popup()
	    },
	    _preparePopupWrapper: function() {
	        var c = this;
	        var b = $(".c-popup-wrapper");
	        if (b.length) {
	            c.$popupFrame = b;
	            c.$popupFrame.empty()
	        } else {
	            c.$popupFrame = $('<div class="c-popup-wrapper"></div>');
	            $(document.body).append(c.$popupFrame)
	        }
	    },
	    _stopScroll: function() {
	        var b = this;
	        b.$popupFrame.on("touchmove", function(c) {
	            c.preventDefault()
	        })
	    },
	    _bindEvent: function() {
	        var b = this;
	        b.$popupFrame.on("click", ".c-popup-mask,.c-popup-remove", function() {
	            b.closePopup()
	        })
	    },
	    _randerContent: function() {
	        var d = this;
	        d.$popupMask = $('<div class="c-popup-mask"></div>');
	        d.$popupModal = $('<div class="c-popup-modal"></div>');
	        d.$popupContent = $('<div class="c-popup-content"></div>');
	        d.$popupHead = $('<div class="c-popup-head"></div>');
	        if (d.options.title) {
	            var c = $('<div class="c-popup-title"></div>');
	            c.append(d.options.title);
	            d.$popupHead.append(c)
	        }
	        var b = $('<div class="c-popup-remove c-icon">&#xe61a</div>');
	        d.$popupHead.append(b);
	        d.$popupContent.append(d.options.content);
	        d.$popupModal.append(d.$popupHead).append(d.$popupContent).addClass(d.options.customClassName);
	        d.$popupFrame.append(d.$popupModal).append(d.$popupMask)
	    },
	    popup: function() {
	        var c = this;
	        var b = $(window).height();
	        c._randerContent();
	        c._bindEvent();
	        c.$popupMask.show().animate({
	            opacity: 1
	        }, "fast", "ease");
	        c.$popupModal.show();
	        var d = c.$popupModal.height();
	        if (c.options.fullView || d > b) {
	            c.$popupModal.height("100%")
	        }
	        c.$popupModal.animate({
	            "-webkit-transform": "translate3d(0, 0, 0)",
	            transform: "translate3d(0, 0, 0)"
	        }, c.options.duration, "ease", function() {
	            $(this).css({
	                "-webkit-transform": "none",
	                transform: "none"
	            })
	        })
	    },
	    closePopup: function() {
	        var b = this;
	        b.$popupModal.animate({
	            "-webkit-transform": "translate3d(0, 100%, 0)",
	            transform: "translate3d(0, 100%, 0)"
	        }, b.options.duration, "ease", function() {
	            $(this).css({
	                "-webkit-transform": "none",
	                transform: "none"
	            }).hide();
	            b.options.onClose();
	            b._destroy()
	        });
	        b.$popupMask.animate({
	            opacity: 0
	        }, "fast", "ease", function() {
	            $(this).hide()
	        })
	    },
	    _destroy: function() {
	        var b = this;
	        b.$popupFrame.off("click", ".c-popup-mask,.c-popup-remove");
	        b.$popupFrame.empty()
	    }
	};
	window.popup = a;
})();

(function(){
	var a = function(b) {
	    var c = this;
	    c.options = $.extend({
	        customClassName: ".c-popup-modal",
	        onOpen: function() {},
	        onClose: function() {}
	    }, b);
	    c._init()
	};

	a.prototype = {
	    constructor: a,
	    version: "0.0.1",
	    _init: function() {
	        var b = this;
	        b._preparePopupWrapper();
	        b._stopScroll();
	        b.popup()
	    },
	    _preparePopupWrapper: function() {
	        var c = this;
	        var b = $(".c-popup-wrapper");
	        if (b.length) {
	            c.$popupFrame = b;
	        }
	    },
	    _stopScroll: function() {
	        var b = this;
	        b.$popupFrame.on("touchmove", function(c) {
	            c.preventDefault()
	        })
	    },
	    _bindEvent: function() {
	        var b = this;
	        b.$popupFrame.on("click", ".c-popup-mask,.c-popup-remove", function() {
	            b.closePopup()
	        })
	    },
	    _randerContent: function() {
	        var d = this;
	        d.$popupMask = this.$popupFrame.find(".c-popup-mask");
	        d.$popupModal = this.$popupFrame.find(".c-popup-modal");
	        d.$popupContent = this.$popupFrame.find(".c-popup-content");
	    },
	    popup: function() {
	        var c = this;
	        var b = $(window).height();
	        c._randerContent();
	        c._bindEvent();
	        c.$popupMask.show().animate({
	            opacity: 1
	        }, "fast", "ease");
	        c.$popupModal.show();
	        var d = c.$popupModal.height();
	        if (c.options.fullView || d > b) {
	            c.$popupModal.height("100%")
	        }
	        c.$popupModal.animate({
	            "-webkit-transform": "translate3d(0, 0, 0)",
	            transform: "translate3d(0, 0, 0)"
	        }, c.options.duration, "ease", function() {
	            $(this).css({
	                "-webkit-transform": "none",
	                transform: "none"
	            })
	        })
	    },
	    closePopup: function() {
	        var b = this;
	        b.$popupModal.animate({
	            "-webkit-transform": "translate3d(0, 100%, 0)",
	            transform: "translate3d(0, 100%, 0)"
	        }, b.options.duration, "ease", function() {
	            // $(this).css({
	            //     "-webkit-transform": "none",
	            //     transform: "none"
	            // }).hide();
	            $(this).hide();
	            b.options.onClose();
	        });
	        // $(this).hide();
	        b.$popupMask.animate({
	            opacity: 0
	        }, "fast", "ease", function() {
	            $(this).hide()
	        })
	    },
	    _destroy: function() {
	        var b = this;
	        b.$popupFrame.off("click", ".c-popup-mask,.c-popup-remove");
	        b.$popupFrame.empty()
	    }
	};

	window.showPopup = a;
})();
