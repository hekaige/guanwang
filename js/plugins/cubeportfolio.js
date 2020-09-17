/*!
 * Cube Portfolio - Responsive jQuery Grid Plugin
 *
 * version: 1.6.0 (7 November, 2014)
 * requires jQuery v1.7 or later
 *
 * Copyright (c) 2014, Mihai Buricea (http://scriptpie.com)
 * Released under CodeCanyon License http://codecanyon.net/licenses
 *
 */
! function(a, b, c, d) {
    "use strict";
    var e = "cbp",
        f = "." + e;
    "function" != typeof Object.create && (Object.create = function(a) {
        function b() {}
        return b.prototype = a, new b
    }), a.expr[":"].uncached = function(b) {
        if (!a(b).is('img[src!=""]')) return !1;
        var c = new Image;
        return c.src = b.src, !c.complete
    };
    var g = {
            init: function(a, b) {
                var c, d = this;
                return d.cubeportfolio = a, d.type = b, d.isOpen = !1, d.options = d.cubeportfolio.options, "singlePageInline" === b ? (d.matrice = [-1, -1], d.height = 0, void d._createMarkupSinglePageInline()) : (d._createMarkup(), void(d.options.singlePageDeeplinking && "singlePage" === b && (d.url = location.href, "#" === d.url.slice(-1) && (d.url = d.url.slice(0, -1)), c = d.cubeportfolio.blocksAvailable.find(d.options.singlePageDelegate).filter(function() {
                    return d.url.split("#cbp=")[1] === this.getAttribute("href")
                })[0], c && (d.url = d.url.replace(/#cbp=(.+)/gi, ""), d.openSinglePage(d.cubeportfolio.blocksAvailable.find(d.options.singlePageDelegate), c)))))
            },
            _createMarkup: function() {
                var b = this,
                    d = "";
                "singlePage" === b.type && "left" !== b.options.singlePageAnimation && (d = " cbp-popup-singlePage-" + b.options.singlePageAnimation), b.wrap = a("<div/>", {
                    "class": "cbp-popup-wrap cbp-popup-" + b.type + d,
                    "data-action": "lightbox" === b.type ? "close" : ""
                }).on("click" + f, function(c) {
                    if (!b.stopEvents) {
                        var d = a(c.target).attr("data-action");
                        b[d] && (b[d](), c.preventDefault())
                    }
                }), b.content = a("<div/>", {
                    "class": "cbp-popup-content"
                }).appendTo(b.wrap), a("<div/>", {
                    "class": "cbp-popup-loadingBox"
                }).appendTo(b.wrap), "ie8" === b.cubeportfolio.browser && (b.bg = a("<div/>", {
                    "class": "cbp-popup-ie8bg",
                    "data-action": "lightbox" === b.type ? "close" : ""
                }).appendTo(b.wrap)), b.navigationWrap = a("<div/>", {
                    "class": "cbp-popup-navigation-wrap"
                }).appendTo(b.wrap), b.navigation = a("<div/>", {
                    "class": "cbp-popup-navigation"
                }).appendTo(b.navigationWrap), b.closeButton = a("<div/>", {
                    "class": "cbp-popup-close",
                    title: "Close (Esc arrow key)",
                    "data-action": "close"
                }).appendTo(b.navigation), b.nextButton = a("<div/>", {
                    "class": "cbp-popup-next",
                    title: "Next (Right arrow key)",
                    "data-action": "next"
                }).appendTo(b.navigation), b.prevButton = a("<div/>", {
                    "class": "cbp-popup-prev",
                    title: "Previous (Left arrow key)",
                    "data-action": "prev"
                }).appendTo(b.navigation), "singlePage" === b.type && (b.options.singlePageCounter && (b.counter = a(b.options.singlePageCounter).appendTo(b.navigation), b.counter.text("")), b.content.on("click" + f, b.options.singlePageDelegate, function(a) {
                    a.preventDefault();
                    var c, d = b.dataArray.length,
                        e = this.getAttribute("href");
                    for (c = 0; d > c && b.dataArray[c].url !== e; c++);
                    b.singlePageJumpTo(c - b.current)
                }), b.wrap.on("mousewheel" + f + " DOMMouseScroll" + f, function(a) {
                    a.stopImmediatePropagation()
                })), a(c).on("keydown" + f, function(a) {
                    b.isOpen && (b.stopEvents || (37 === a.keyCode ? b.prev() : 39 === a.keyCode ? b.next() : 27 === a.keyCode && b.close()))
                })
            },
            _createMarkupSinglePageInline: function() {
                var b = this;
                b.wrap = a("<div/>", {
                    "class": "cbp-popup-singlePageInline"
                }).on("click" + f, function(c) {
                    if (!b.stopEvents) {
                        var d = a(c.target).attr("data-action");
                        d && b[d] && (b[d](), c.preventDefault())
                    }
                }), b.content = a("<div/>", {
                    "class": "cbp-popup-content"
                }).appendTo(b.wrap), a("<div/>", {
                    "class": "cbp-popup-loadingBox"
                }).appendTo(b.wrap), b.navigation = a("<div/>", {
                    "class": "cbp-popup-navigation"
                }).appendTo(b.wrap), b.closeButton = a("<div/>", {
                    "class": "cbp-popup-close",
                    title: "Close (Esc arrow key)",
                    "data-action": "close"
                }).appendTo(b.navigation)
            },
            destroy: function() {
                var b = this,
                    d = a("body");
                a(c).off("keydown" + f), d.off("click" + f, b.options.lightboxDelegate), d.off("click" + f, b.options.singlePageDelegate), b.content.off("click" + f, b.options.singlePageDelegate), b.cubeportfolio.$obj.off("click" + f, b.options.singlePageInlineDelegate), b.cubeportfolio.$obj.off("click" + f, b.options.lightboxDelegate), b.cubeportfolio.$obj.off("click" + f, b.options.singlePageDelegate), b.cubeportfolio.$obj.removeClass("cbp-popup-isOpening"), b.cubeportfolio.blocks.removeClass("cbp-singlePageInline-active cbp-singlePageInline-active-loading"), b.wrap.remove()
            },
            openLightbox: function(d, e) {
                var f, g, h = this,
                    i = 0,
                    j = [];
                if (!h.isOpen) {
                    if (h.isOpen = !0, h.stopEvents = !1, h.dataArray = [], h.current = null, f = e.getAttribute("href"), null === f) throw new Error("HEI! Your clicked element doesn't have a href attribute.");
                    a.each(d, function(b, c) {
                        var d, e = c.getAttribute("href"),
                            g = e,
                            k = "isImage";
                        if (-1 === a.inArray(e, j)) {
                            if (f === e) h.current = i;
                            else if (!h.options.lightboxGallery) return;
                            /youtube/i.test(e) ? (d = e.substring(e.lastIndexOf("v=") + 2), /autoplay=/i.test(d) || (d += "&autoplay=1"), d = d.replace(/\?|&/, "?"), g = "//www.youtube.com/embed/" + d, k = "isYoutube") : /vimeo/i.test(e) ? (d = e.substring(e.lastIndexOf("/") + 1), /autoplay=/i.test(d) || (d += "&autoplay=1"), d = d.replace(/\?|&/, "?"), g = "//player.vimeo.com/video/" + d, k = "isVimeo") : /ted\.com/i.test(e) ? (g = "http://embed.ted.com/talks/" + e.substring(e.lastIndexOf("/") + 1) + ".html", k = "isTed") : /(\.mp4)|(\.ogg)|(\.ogv)|(\.webm)/i.test(e) && (g = e.split(-1 !== e.indexOf("|") ? "|" : "%7C"), k = "isSelfHosted"), h.dataArray.push({
                                src: g,
                                title: c.getAttribute(h.options.lightboxTitleSrc),
                                type: k
                            }), i++
                        }
                        j.push(e)
                    }), h.counterTotal = h.dataArray.length, 1 === h.counterTotal ? (h.nextButton.hide(), h.prevButton.hide(), h.dataActionImg = "") : (h.nextButton.show(), h.prevButton.show(), h.dataActionImg = 'data-action="next"'), h.wrap.appendTo(c.body), h.scrollTop = a(b).scrollTop(), h.originalStyle = a("html").attr("style"), a("html").css({
                        overflow: "hidden",
                        paddingRight: b.innerWidth - a(c).width()
                    }), h.wrap.show(), g = h.dataArray[h.current], h[g.type](g)
                }
            },
            openSinglePage: function(d, e) {
                var f, g = this,
                    h = 0,
                    i = [];
                if (!g.isOpen) {
                    if (g.cubeportfolio.singlePageInline && g.cubeportfolio.singlePageInline.isOpen && g.cubeportfolio.singlePageInline.close(), g.isOpen = !0, g.stopEvents = !1, g.dataArray = [], g.current = null, f = e.getAttribute("href"), null === f) throw new Error("HEI! Your clicked element doesn't have a href attribute.");
                    if (a.each(d, function(b, c) {
                            var d = c.getAttribute("href"); - 1 === a.inArray(d, i) && (f === d && (g.current = h), g.dataArray.push({
                                url: d,
                                element: c
                            }), h++), i.push(d)
                        }), g.counterTotal = g.dataArray.length, 1 === g.counterTotal ? (g.nextButton.hide(), g.prevButton.hide()) : (g.nextButton.show(), g.prevButton.show()), g.wrap.appendTo(c.body), g.scrollTop = a(b).scrollTop(), a("html").css({
                            overflow: "hidden",
                            paddingRight: b.innerWidth - a(c).width()
                        }), g.wrap.scrollTop(0), a.isFunction(g.options.singlePageCallback) && g.options.singlePageCallback.call(g, g.dataArray[g.current].url, g.dataArray[g.current].element), g.wrap.show(), g.wrap.one(g.cubeportfolio.transitionEnd, function() {
                            var a;
                            g.options.singlePageStickyNavigation && (g.wrap.addClass("cbp-popup-singlePage-sticky"), a = g.wrap[0].clientWidth, g.navigationWrap.width(a))
                        }), ("ie8" === g.cubeportfolio.browser || "ie9" === g.cubeportfolio.browser) && (setTimeout(function() {
                            g.wrap.addClass("cbp-popup-singlePage-sticky")
                        }, 1e3), g.options.singlePageStickyNavigation)) {
                        var j = g.wrap[0].clientWidth;
                        g.navigationWrap.width(j)
                    }
                    setTimeout(function() {
                        g.wrap.addClass("cbp-popup-singlePage-open")
                    }, 20), g.options.singlePageDeeplinking && (location.href = g.url + "#cbp=" + g.dataArray[g.current].url)
                }
            },
            openSinglePageInline: function(b, c, d) {
                var e, f, g, h, i, j, k = this,
                    l = 0,
                    m = 0,
                    n = 0;
                if (d = d || !1, k.storeBlocks = b, k.storeCurrentBlock = c, k.isOpen) return h = a(c).closest(".cbp-item").index(".cbp-item"), void(k.dataArray[k.current].url !== c.getAttribute("href") || k.current !== h ? k.cubeportfolio.singlePageInline.close("open", {
                    blocks: b,
                    currentBlock: c,
                    fromOpen: !0
                }) : k.close());
                if (k.wrap.addClass("cbp-popup-loading"), k.isOpen = !0, k.stopEvents = !1, k.dataArray = [], k.current = null, e = c.getAttribute("href"), null === e) throw new Error("HEI! Your clicked element doesn't have a href attribute.");
                i = a(c).closest(".cbp-item")[0], a.each(b, function(a, b) {
                    i === b && (k.current = a)
                }), k.dataArray[k.current] = {
                    url: e,
                    element: c
                }, j = a(k.dataArray[k.current].element).parents(".cbp-item").addClass("cbp-singlePageInline-active"), d || j.addClass("cbp-singlePageInline-active-loading"), k.counterTotal = b.length, k.wrap.insertBefore(k.cubeportfolio.$ul), "top" === k.options.singlePageInlinePosition ? (m = 0, n = k.cubeportfolio.cols - 1) : "bottom" === k.options.singlePageInlinePosition ? (m = k.counterTotal, n = k.counterTotal, k.lastColumn = !0, d ? k.lastColumn && (k.top = k.lastColumnHeight) : (k.lastColumnHeight = k.cubeportfolio.height, k.top = k.lastColumnHeight)) : "above" === k.options.singlePageInlinePosition ? (l = Math.floor(k.current / k.cubeportfolio.cols), m = k.cubeportfolio.cols * l, n = k.cubeportfolio.cols * (l + 1) - 1) : (l = Math.floor(k.current / k.cubeportfolio.cols), m = Math.min(k.cubeportfolio.cols * (l + 1), k.counterTotal), n = Math.min(k.cubeportfolio.cols * (l + 2) - 1, k.counterTotal), f = Math.ceil((k.current + 1) / k.cubeportfolio.cols), g = Math.ceil(k.counterTotal / k.cubeportfolio.cols), k.lastColumn = f === g, d ? k.lastColumn && (k.top = k.lastColumnHeight) : (k.lastColumnHeight = k.cubeportfolio.height, k.top = k.lastColumnHeight)), k.matrice = [m, n], a.isFunction(k.options.singlePageInlineCallback) && k.options.singlePageInlineCallback.call(k, k.dataArray[k.current].url, k.dataArray[k.current].element)
            },
            _resizeSinglePageInline: function(c) {
                var d, e = this;
                c = c || !1, e.height = e.content.outerHeight(!0), e.cubeportfolio._layout(), e.cubeportfolio._processStyle(e.cubeportfolio.transition), c && e.wrap.removeClass("cbp-popup-loading"), e.cubeportfolio.$obj.addClass("cbp-popup-isOpening"), e.wrap.css({
                    height: e.height
                }), e.wrap.css({
                    top: e.top
                }), d = e.lastColumn ? e.height : 0, e.cubeportfolio._resizeMainContainer(e.cubeportfolio.transition, d), e.options.singlePageInlineInFocus && (e.scrollTop = a(b).scrollTop(), a("body,html").animate({
                    scrollTop: e.wrap.offset().top - 150
                })), a(".cbp-singlePageInline-active").removeClass("cbp-singlePageInline-active-loading")
            },
            appendScriptsToWrap: function(a) {
                var b = this,
                    d = 0,
                    e = function(f) {
                        var g = c.createElement("script"),
                            h = f.src;
                        g.type = "text/javascript", g.readyState ? g.onreadystatechange = function() {
                            ("loaded" == g.readyState || "complete" == g.readyState) && (g.onreadystatechange = null, d++, a[d] && e(a[d]))
                        } : g.onload = function() {
                            d++, a[d] && e(a[d])
                        }, h ? g.src = h : g.text = f.text, b.content[0].appendChild(g)
                    };
                e(a[0])
            },
            updateSinglePage: function(b, c, d) {
                var e, f, g = this;
                g.content.addClass("cbp-popup-content").removeClass("cbp-popup-content-basic"), d === !1 && g.content.removeClass("cbp-popup-content").addClass("cbp-popup-content-basic"), g.content.html(b), c && (g.wrap.hasClass("cbp-popup-ready") ? g.appendScriptsToWrap(c) : g.wrap.one(g.cubeportfolio.transitionEnd, function() {
                    g.appendScriptsToWrap(c)
                })), g.wrap.addClass("cbp-popup-ready"), g.wrap.removeClass("cbp-popup-loading"), g.counter && (f = a(g._getCounterMarkup(g.options.singlePageCounter, g.current + 1, g.counterTotal)), g.counter.text(f.text())), e = g.content.find(".cbp-slider"), e ? (g.slider = Object.create(h), g.slider._init(g, e)) : g.slider = null, g.wrap.one(g.cubeportfolio.transitionEnd, function() {
                    ("android" === g.cubeportfolio.browser || "ios" === g.cubeportfolio.browser) && a("html").css({
                        position: "fixed"
                    })
                })
            },
            updateSinglePageInline: function(a, b) {
                var c, d = this;
                d.content.html(a), d._loadSinglePageInline(), b && d.appendScriptsToWrap(b), c = d.content.find(".cbp-slider"), c ? (d.slider = Object.create(h), d.slider._init(d, c)) : d.slider = null
            },
            _loadSinglePageInline: function() {
                var b, c, d, e = this,
                    g = [],
                    h = /url\((['"]?)(.*?)\1\)/g;
                if (d = e.wrap.children().css("backgroundImage"))
                    for (var i; i = h.exec(d);) g.push({
                        src: i[2]
                    });
                e.wrap.find("*").each(function() {
                    var b = a(this);
                    if (b.is("img:uncached") && g.push({
                            src: b.attr("src"),
                            element: b[0]
                        }), d = b.css("backgroundImage"))
                        for (var c; c = h.exec(d);) g.push({
                            src: c[2],
                            element: b[0]
                        })
                });
                var j = g.length,
                    k = 0;
                0 === j && setTimeout(function() {
                    e._resizeSinglePageInline(!0)
                }, 0);
                var l = function() {
                    k++, k === j && setTimeout(function() {
                        e._resizeSinglePageInline(!0)
                    }, 0)
                };
                for (b = 0; j > b; b++) c = new Image, a(c).on("load" + f + " error" + f, l), c.src = g[b].src
            },
            isImage: function(b) {
                var c = this,
                    d = new Image;
                c.tooggleLoading(!0), a('<img src="' + b.src + '">').is("img:uncached") ? (a(d).on("load" + f + " error" + f, function() {
                    c.updateImagesMarkup(b.src, b.title, c._getCounterMarkup(c.options.lightboxCounter, c.current + 1, c.counterTotal)), c.tooggleLoading(!1)
                }), d.src = b.src) : (c.updateImagesMarkup(b.src, b.title, c._getCounterMarkup(c.options.lightboxCounter, c.current + 1, c.counterTotal)), c.tooggleLoading(!1))
            },
            isVimeo: function(a) {
                var b = this;
                b.updateVideoMarkup(a.src, a.title, b._getCounterMarkup(b.options.lightboxCounter, b.current + 1, b.counterTotal))
            },
            isYoutube: function(a) {
                var b = this;
                b.updateVideoMarkup(a.src, a.title, b._getCounterMarkup(b.options.lightboxCounter, b.current + 1, b.counterTotal))
            },
            isTed: function(a) {
                var b = this;
                b.updateVideoMarkup(a.src, a.title, b._getCounterMarkup(b.options.lightboxCounter, b.current + 1, b.counterTotal))
            },
            isSelfHosted: function(a) {
                var b = this;
                b.updateSelfHostedVideo(a.src, a.title, b._getCounterMarkup(b.options.lightboxCounter, b.current + 1, b.counterTotal))
            },
            _getCounterMarkup: function(a, b, c) {
                var d;
                return a.length ? (d = {
                    current: b,
                    total: c
                }, a.replace(/\{\{current}}|\{\{total}}/gi, function(a) {
                    return d[a.slice(2, -2)]
                })) : ""
            },
            updateSelfHostedVideo: function(a, b, c) {
                var d, e = this;
                e.wrap.addClass("cbp-popup-lightbox-isIframe");
                var f = '<div class="cbp-popup-lightbox-iframe"><video controls="controls" height="auto" style="width: 100%">';
                for (d = 0; d < a.length; d++) /(\.mp4)/i.test(a[d]) ? f += '<source src="' + a[d] + '" type="video/mp4">' : /(\.ogg)|(\.ogv)/i.test(a[d]) ? f += '<source src="' + a[d] + '" type="video/ogg">' : /(\.webm)/i.test(a[d]) && (f += '<source src="' + a[d] + '" type="video/webm">');
                f += 'Your browser does not support the video tag.</video><div class="cbp-popup-lightbox-bottom">' + (b ? '<div class="cbp-popup-lightbox-title">' + b + "</div>" : "") + c + "</div></div>", e.content.html(f), e.wrap.addClass("cbp-popup-ready"), e.preloadNearbyImages()
            },
            updateVideoMarkup: function(a, b, c) {
                var d = this;
                d.wrap.addClass("cbp-popup-lightbox-isIframe");
                var e = '<div class="cbp-popup-lightbox-iframe"><iframe src="' + a + '" frameborder="0" allowfullscreen scrolling="no"></iframe><div class="cbp-popup-lightbox-bottom">' + (b ? '<div class="cbp-popup-lightbox-title">' + b + "</div>" : "") + c + "</div></div>";
                d.content.html(e), d.wrap.addClass("cbp-popup-ready"), d.preloadNearbyImages()
            },
            updateImagesMarkup: function(a, b, c) {
                var d = this;
                d.wrap.removeClass("cbp-popup-lightbox-isIframe");
                var e = '<div class="cbp-popup-lightbox-figure"><img src="' + a + '" class="cbp-popup-lightbox-img" ' + d.dataActionImg + ' /><div class="cbp-popup-lightbox-bottom">' + (b ? '<div class="cbp-popup-lightbox-title">' + b + "</div>" : "") + c + "</div></div>";
                d.content.html(e), d.wrap.addClass("cbp-popup-ready"), d.resizeImage(), d.preloadNearbyImages()
            },
            next: function() {
                var a = this;
                a[a.type + "JumpTo"](1)
            },
            prev: function() {
                var a = this;
                a[a.type + "JumpTo"](-1)
            },
            lightboxJumpTo: function(a) {
                var b, c = this;
                c.current = c.getIndex(c.current + a), b = c.dataArray[c.current], c[b.type](b)
            },
            singlePageJumpTo: function(b) {
                var c = this;
                c.current = c.getIndex(c.current + b), a.isFunction(c.options.singlePageCallback) && (c.resetWrap(), c.wrap.scrollTop(0), c.wrap.addClass("cbp-popup-loading"), c.options.singlePageCallback.call(c, c.dataArray[c.current].url, c.dataArray[c.current].element), c.options.singlePageDeeplinking && (location.href = c.url + "#cbp=" + c.dataArray[c.current].url))
            },
            resetWrap: function() {
                var a = this;
                "singlePage" === a.type && a.options.singlePageDeeplinking && (location.href = a.url + "#")
            },
            getIndex: function(a) {
                var b = this;
                return a %= b.counterTotal, 0 > a && (a = b.counterTotal + a), a
            },
            close: function(c, d) {
                var e = this;
                e.isOpen = !1, "singlePageInline" === e.type ? "open" === c ? (e.wrap.addClass("cbp-popup-loading"), a(e.dataArray[e.current].element).closest(".cbp-item").removeClass("cbp-singlePageInline-active cbp-singlePageInline-active-loading"), e.openSinglePageInline(d.blocks, d.currentBlock, d.fromOpen)) : (e.matrice = [-1, -1], e.cubeportfolio._layout(), e.cubeportfolio._processStyle(e.cubeportfolio.transition), e.cubeportfolio._resizeMainContainer(e.cubeportfolio.transition), e.wrap.css({
                    height: 0
                }), a(e.dataArray[e.current].element).parents(".cbp-item").removeClass("cbp-singlePageInline-active cbp-singlePageInline-active-loading"), "ie8" === e.cubeportfolio.browser || "ie9" === e.cubeportfolio.browser ? (e.content.html(""), e.wrap.detach(), e.cubeportfolio.$obj.removeClass("cbp-popup-isOpening"), "promise" === c && a.isFunction(d.callback) && d.callback.call(e.cubeportfolio)) : e.wrap.one(e.cubeportfolio.transitionEnd, function() {
                    e.content.html(""), e.wrap.detach(), e.cubeportfolio.$obj.removeClass("cbp-popup-isOpening"), "promise" === c && a.isFunction(d.callback) && d.callback.call(e.cubeportfolio)
                }), e.options.singlePageInlineInFocus && a("body, html").animate({
                    scrollTop: e.scrollTop
                })) : "singlePage" === e.type ? (e.resetWrap(), e.wrap.removeClass("cbp-popup-ready"), ("android" === e.cubeportfolio.browser || "ios" === e.cubeportfolio.browser) && a("html").css({
                    position: ""
                }), a(b).scrollTop(e.scrollTop), setTimeout(function() {
                    e.stopScroll = !0, e.navigationWrap.css({
                        top: e.wrap.scrollTop()
                    }), e.wrap.removeClass("cbp-popup-singlePage-open cbp-popup-singlePage-sticky"), ("ie8" === e.cubeportfolio.browser || "ie9" === e.cubeportfolio.browser) && (e.content.html(""), e.wrap.detach(), a("html").css({
                        overflow: "",
                        paddingRight: ""
                    }), e.navigationWrap.removeAttr("style"))
                }, 0), e.wrap.one(e.cubeportfolio.transitionEnd, function() {
                    e.content.html(""), e.wrap.detach(), a("html").css({
                        overflow: "",
                        paddingRight: ""
                    }), e.navigationWrap.removeAttr("style")
                })) : (e.originalStyle ? a("html").attr("style", e.originalStyle) : a("html").css({
                    overflow: "",
                    paddingRight: ""
                }), a(b).scrollTop(e.scrollTop), e.content.html(""), e.wrap.detach())
            },
            tooggleLoading: function(a) {
                var b = this;
                b.stopEvents = a, b.wrap[a ? "addClass" : "removeClass"]("cbp-popup-loading")
            },
            resizeImage: function() {
                if (this.isOpen) {
                    var c = a(b).height(),
                        d = this.content.find("img"),
                        e = parseInt(d.css("margin-top"), 10) + parseInt(d.css("margin-bottom"), 10);
                    d.css("max-height", c - e + "px")
                }
            },
            preloadNearbyImages: function() {
                var b, c, d = [],
                    e = this;
                d.push(e.getIndex(e.current + 1)), d.push(e.getIndex(e.current + 2)), d.push(e.getIndex(e.current + 3)), d.push(e.getIndex(e.current - 1)), d.push(e.getIndex(e.current - 2)), d.push(e.getIndex(e.current - 3));
                for (var f = d.length - 1; f >= 0; f--) "isImage" === e.dataArray[d[f]].type && (c = e.dataArray[d[f]].src, b = new Image, a('<img src="' + c + '">').is("img:uncached") && (b.src = c))
            }
        },
        h = {
            _init: function(b, c) {
                var d = this;
                d.current = 0, d.obj = c, d.$obj = a(c), d._createMarkup(), d._events()
            },
            _createMarkup: function() {
                var b, c, d = this;
                d.$ul = d.$obj.children(".cbp-slider-wrap"), d.$li = d.$ul.children(".cbp-slider-item"), d.$li.eq(0).addClass("cbp-slider-item-current"), d.$liLength = d.$li.length, b = a("<div/>", {
                    "class": "cbp-slider-arrowWrap"
                }).appendTo(d.$obj), a("<div/>", {
                    "class": "cbp-slider-arrowNext",
                    "data-action": "nextItem"
                }).appendTo(b), a("<div/>", {
                    "class": "cbp-slider-arrowPrev",
                    "data-action": "prevItem"
                }).appendTo(b), c = a("<div/>", {
                    "class": "cbp-slider-bulletWrap"
                }).appendTo(d.$obj);
                for (var e = 0; e < d.$liLength; e++) {
                    var f = 0 === e ? " cbp-slider-bullet-current" : "";
                    a("<div/>", {
                        "class": "cbp-slider-bullet" + f,
                        "data-action": "jumpToItem"
                    }).appendTo(c)
                }
            },
            _events: function() {
                var b = this;
                b.$obj.on("click" + f, function(c) {
                    var d = a(c.target).attr("data-action");
                    b[d] && (b[d](c), c.preventDefault())
                })
            },
            nextItem: function() {
                this.jumpTo(1)
            },
            prevItem: function() {
                this.jumpTo(-1)
            },
            jumpToItem: function(b) {
                var c = a(b.target),
                    d = c.index();
                this.jumpTo(d - this.current)
            },
            jumpTo: function(b) {
                var c, d = this,
                    e = this.$li.eq(this.current);
                this.current = this.getIndex(this.current + b), c = this.$li.eq(this.current), c.addClass("cbp-slider-item-next"), c.animate({
                    opacity: 1
                }, function() {
                    e.removeClass("cbp-slider-item-current"), c.removeClass("cbp-slider-item-next").addClass("cbp-slider-item-current").removeAttr("style");
                    var b = a(".cbp-slider-bullet");
                    b.removeClass("cbp-slider-bullet-current"), b.eq(d.current).addClass("cbp-slider-bullet-current")
                })
            },
            getIndex: function(a) {
                return a %= this.$liLength, 0 > a && (a = this.$liLength + a), a
            }
        },
        i = {
            _main: function(b, c, d) {
                var e = this;
                e.styleQueue = [], e.isAnimating = !1, e.defaultFilter = "*", e.registeredEvents = [], a.isFunction(d) && e._registerEvent("initFinish", d, !0), e._extendOptions(c), e.obj = b, e.$obj = a(b), e.width = e.$obj.width(), e.$obj.addClass("cbp cbp-loading"), e.$ul = e.$obj.children(), e.$ul.addClass("cbp-wrapper"), ("lazyLoading" === e.options.displayType || "fadeIn" === e.options.displayType) && e.$ul.css({
                    opacity: 0
                }), "fadeInToTop" === e.options.displayType && e.$ul.css({
                    opacity: 0,
                    marginTop: 30
                }), e._browserInfo(), e._initCSSandEvents(), e._prepareBlocks(), "lazyLoading" === e.options.displayType || "sequentially" === e.options.displayType || "bottomToTop" === e.options.displayType || "fadeInToTop" === e.options.displayType ? e._load() : e._beforeDisplay()
            },
            _extendOptions: function(b) {
                var c = this;
                b && !b.hasOwnProperty("lightboxCounter") && b.lightboxShowCounter === !1 && (b.lightboxCounter = ""), b && !b.hasOwnProperty("singlePageCounter") && b.singlePageShowCounter === !1 && (b.singlePageCounter = ""), c.options = a.extend({}, a.fn.cubeportfolio.options, b)
            },
            _browserInfo: function() {
                var a, c, d = this,
                    e = navigator.appVersion;
                d.browser = -1 !== e.indexOf("MSIE 8.") ? "ie8" : -1 !== e.indexOf("MSIE 9.") ? "ie9" : -1 !== e.indexOf("MSIE 10.") ? "ie10" : b.ActiveXObject || "ActiveXObject" in b ? "ie11" : /android/gi.test(e) ? "android" : /iphone|ipad|ipod/gi.test(e) ? "ios" : /chrome/gi.test(e) ? "chrome" : "", d.browser && d.$obj.addClass("cbp-" + d.browser), a = d._styleSupport("transition"), c = d._styleSupport("animation"), d.transition = d.transitionByFilter = a ? "css" : "animate", "animate" !== d.transition && (d.transitionEnd = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                }[a], d.animationEnd = {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "Animationend",
                    OAnimation: "oAnimationEnd oanimationend",
                    animation: "animationend"
                }[c], d.supportCSSTransform = d._styleSupport("transform"), d.supportCSSTransform && d._cssHooks())
            },
            _styleSupport: function(a) {
                var b, d, e, f = a.charAt(0).toUpperCase() + a.slice(1),
                    g = ["Moz", "Webkit", "O", "ms"],
                    h = c.createElement("div");
                if (a in h.style) d = a;
                else
                    for (e = g.length - 1; e >= 0; e--)
                        if (b = g[e] + f, b in h.style) {
                            d = b;
                            break
                        } return h = null, d
            },
            _cssHooks: function() {
                function b(b, e, f) {
                    var g, h, i, j, k, l, m = a(b),
                        n = m.data("transformFn") || {},
                        o = {},
                        p = {};
                    o[f] = e, a.extend(n, o);
                    for (g in n) n.hasOwnProperty(g) && (h = n[g], p[g] = c[g](h));
                    i = p.translate || "", j = p.scale || "", l = p.skew || "", k = i + j + l, m.data("transformFn", n), b.style[d.supportCSSTransform] = k
                }
                var c, d = this;
                c = d._has3d() ? {
                    translate: function(a) {
                        return "translate3d(" + a[0] + "px, " + a[1] + "px, 0) "
                    },
                    scale: function(a) {
                        return "scale3d(" + a + ", " + a + ", 1) "
                    },
                    skew: function(a) {
                        return "skew(" + a[0] + "deg, " + a[1] + "deg) "
                    }
                } : {
                    translate: function(a) {
                        return "translate(" + a[0] + "px, " + a[1] + "px) "
                    },
                    scale: function(a) {
                        return "scale(" + a + ") "
                    },
                    skew: function(a) {
                        return "skew(" + a[0] + "deg, " + a[1] + "deg) "
                    }
                }, a.cssNumber.scale = !0, a.cssHooks.scale = {
                    set: function(a, c) {
                        "string" == typeof c && (c = parseFloat(c)), b(a, c, "scale")
                    },
                    get: function(b) {
                        var c = a.data(b, "transformFn");
                        return c && c.scale ? c.scale : 1
                    }
                }, a.fx.step.scale = function(b) {
                    a.cssHooks.scale.set(b.elem, b.now + b.unit)
                }, a.cssNumber.translate = !0, a.cssHooks.translate = {
                    set: function(a, c) {
                        b(a, c, "translate")
                    },
                    get: function(b) {
                        var c = a.data(b, "transformFn");
                        return c && c.translate ? c.translate : [0, 0]
                    }
                }, a.cssNumber.skew = !0, a.cssHooks.skew = {
                    set: function(a, c) {
                        b(a, c, "skew")
                    },
                    get: function(b) {
                        var c = a.data(b, "transformFn");
                        return c && c.skew ? c.skew : [0, 0]
                    }
                }
            },
            _has3d: function() {
                var a, e, f = c.createElement("p"),
                    g = {
                        webkitTransform: "-webkit-transform",
                        OTransform: "-o-transform",
                        msTransform: "-ms-transform",
                        MozTransform: "-moz-transform",
                        transform: "transform"
                    };
                c.body.insertBefore(f, null);
                for (a in g) g.hasOwnProperty(a) && f.style[a] !== d && (f.style[a] = "translate3d(1px,1px,1px)", e = b.getComputedStyle(f).getPropertyValue(g[a]));
                return c.body.removeChild(f), e !== d && e.length > 0 && "none" !== e
            },
            _prepareBlocks: function() {
                var a = this;
                a.blocks = a.$ul.children(".cbp-item"), a.blocksAvailable = a.blocks, a.blocks.wrapInner('<div class="cbp-item-wrapper"></div>'), a.options.caption && a._captionInit()
            },
            _captionInit: function() {
                var a = this;
                a.$obj.addClass("cbp-caption-" + a.options.caption), a["_" + a.options.caption + "Caption"]()
            },
            _captionDestroy: function() {
                var a = this;
                a.$obj.removeClass("cbp-caption-" + a.options.caption), a["_" + a.options.caption + "CaptionDestroy"]()
            },
            _noneCaption: function() {},
            _noneCaptionDestroy: function() {},
            _pushTopCaption: function() {
                var b = this;
                ("ie8" === b.browser || "ie9" === b.browser) && a(".cbp-caption").on("mouseenter" + f, function() {
                    var b = a(this),
                        c = b.find(".cbp-caption-defaultWrap"),
                        d = b.find(".cbp-caption-activeWrap");
                    c.animate({
                        bottom: "100%"
                    }, "fast"), d.animate({
                        bottom: 0
                    }, "fast")
                }).on("mouseleave" + f, function() {
                    var b = a(this),
                        c = b.find(".cbp-caption-defaultWrap"),
                        d = b.find(".cbp-caption-activeWrap");
                    c.animate({
                        bottom: 0
                    }, "fast"), d.animate({
                        bottom: "-100%"
                    }, "fast")
                })
            },
            _pushTopCaptionDestroy: function() {
                var b = this,
                    c = a(".cbp-caption");
                ("ie8" === b.browser || "ie9" === b.browser) && (c.off("mouseenter" + f + " mouseleave" + f), c.find(".cbp-caption-defaultWrap").removeAttr("style"), c.find(".cbp-caption-activeWrap").removeAttr("style"))
            },
            _pushDownCaption: function() {
                var b = this;
                ("ie8" === b.browser || "ie9" === b.browser) && a(".cbp-caption").on("mouseenter" + f, function() {
                    var b = a(this),
                        c = b.find(".cbp-caption-defaultWrap"),
                        d = b.find(".cbp-caption-activeWrap");
                    c.animate({
                        bottom: "-100%"
                    }, "fast"), d.animate({
                        bottom: 0
                    }, "fast")
                }).on("mouseleave" + f, function() {
                    var b = a(this),
                        c = b.find(".cbp-caption-defaultWrap"),
                        d = b.find(".cbp-caption-activeWrap");
                    c.animate({
                        bottom: 0
                    }, "fast"), d.animate({
                        bottom: "100%"
                    }, "fast")
                })
            },
            _pushDownCaptionDestroy: function() {
                var b = this,
                    c = a(".cbp-caption");
                ("ie8" === b.browser || "ie9" === b.browser) && (c.off("mouseenter" + f + " mouseleave" + f), c.find(".cbp-caption-defaultWrap").removeAttr("style"), c.find(".cbp-caption-activeWrap").removeAttr("style"))
            },
            _revealBottomCaption: function() {
                var b = this;
                ("ie8" === b.browser || "ie9" === b.browser) && a(".cbp-caption").on("mouseenter" + f, function() {
                    var b = a(this),
                        c = b.find(".cbp-caption-defaultWrap");
                    c.animate({
                        bottom: "100%"
                    }, "fast")
                }).on("mouseleave" + f, function() {
                    var b = a(this),
                        c = b.find(".cbp-caption-defaultWrap");
                    c.animate({
                        bottom: 0
                    }, "fast")
                })
            },
            _revealBottomCaptionDestroy: function() {
                var b = this,
                    c = a(".cbp-caption");
                ("ie8" === b.browser || "ie9" === b.browser) && (c.off("mouseenter" + f + " mouseleave" + f), c.find(".cbp-caption-defaultWrap").removeAttr("style"))
            },
            _revealTopCaption: function() {
                var b = this;
                ("ie8" === b.browser || "ie9" === b.browser) && a(".cbp-caption").on("mouseenter" + f, function() {
                    var b = a(this),
                        c = b.find(".cbp-caption-defaultWrap");
                    c.animate({
                        bottom: "-100%"
                    }, "fast")
                }).on("mouseleave" + f, function() {
                    var b = a(this),
                        c = b.find(".cbp-caption-defaultWrap");
                    c.animate({
                        bottom: 0
                    }, "fast")
                })
            },
            _revealTopCaptionDestroy: function() {
                var b = this,
                    c = a(".cbp-caption");
                ("ie8" === b.browser || "ie9" === b.browser) && (c.off("mouseenter" + f + " mouseleave" + f), c.find(".cbp-caption-defaultWrap").removeAttr("style"))
            },
            _overlayBottomRevealCaption: function() {
                var b = this;
                ("ie8" === b.browser || "ie9" === b.browser) && a(".cbp-caption").on("mouseenter" + f, function() {
                    var b = a(this),
                        c = b.find(".cbp-caption-defaultWrap"),
                        d = b.find(".cbp-caption-activeWrap").height();
                    c.animate({
                        bottom: d
                    }, "fast")
                }).on("mouseleave" + f, function() {
                    var b = a(this),
                        c = b.find(".cbp-caption-defaultWrap");
                    c.animate({
                        bottom: 0
                    }, "fast")
                })
            },
            _overlayBottomRevealCaptionDestroy: function() {
                var b = this,
                    c = a(".cbp-caption");
                ("ie8" === b.browser || "ie9" === b.browser) && (c.off("mouseenter" + f + " mouseleave" + f), c.find(".cbp-caption-defaultWrap").removeAttr("style"))
            },
            _overlayBottomPushCaption: function() {
                var b = this;
                ("ie8" === b.browser || "ie9" === b.browser) && a(".cbp-caption").on("mouseenter" + f, function() {
                    var b = a(this),
                        c = b.find(".cbp-caption-defaultWrap"),
                        d = b.find(".cbp-caption-activeWrap"),
                        e = d.height();
                    c.animate({
                        bottom: e
                    }, "fast"), d.animate({
                        bottom: 0
                    }, "fast")
                }).on("mouseleave" + f, function() {
                    var b = a(this),
                        c = b.find(".cbp-caption-defaultWrap"),
                        d = b.find(".cbp-caption-activeWrap"),
                        e = d.height();
                    c.animate({
                        bottom: 0
                    }, "fast"), d.animate({
                        bottom: -e
                    }, "fast")
                })
            },
            _overlayBottomPushCaptionDestroy: function() {
                var b = this,
                    c = a(".cbp-caption");
                ("ie8" === b.browser || "ie9" === b.browser) && (c.off("mouseenter" + f + " mouseleave" + f), c.find(".cbp-caption-defaultWrap").removeAttr("style"), c.find(".cbp-caption-activeWrap").removeAttr("style"))
            },
            _overlayBottomCaption: function() {
                var b = this;
                ("ie8" === b.browser || "ie9" === b.browser) && a(".cbp-caption").on("mouseenter" + f, function() {
                    a(this).find(".cbp-caption-activeWrap").animate({
                        bottom: 0
                    }, "fast")
                }).on("mouseleave" + f, function() {
                    var b = a(this).find(".cbp-caption-activeWrap");
                    b.animate({
                        bottom: -b.height()
                    }, "fast")
                })
            },
            _overlayBottomCaptionDestroy: function() {
                var b = this,
                    c = a(".cbp-caption");
                ("ie8" === b.browser || "ie9" === b.browser) && (c.off("mouseenter" + f + " mouseleave" + f), c.find(".cbp-caption-activeWrap").removeAttr("style"))
            },
            _moveRightCaption: function() {
                var b = this;
                ("ie8" === b.browser || "ie9" === b.browser) && a(".cbp-caption").on("mouseenter" + f, function() {
                    a(this).find(".cbp-caption-activeWrap").animate({
                        left: 0
                    }, "fast")
                }).on("mouseleave" + f, function() {
                    var b = a(this).find(".cbp-caption-activeWrap");
                    b.animate({
                        left: -b.width()
                    }, "fast")
                })
            },
            _moveRightCaptionDestroy: function() {
                var b = this,
                    c = a(".cbp-caption");
                ("ie8" === b.browser || "ie9" === b.browser) && (c.off("mouseenter" + f + " mouseleave" + f), c.find(".cbp-caption-activeWrap").removeAttr("style"))
            },
            _revealLeftCaption: function() {
                var b = this;
                ("ie8" === b.browser || "ie9" === b.browser) && a(".cbp-caption").on("mouseenter" + f, function() {
                    a(this).find(".cbp-caption-activeWrap").animate({
                        left: 0
                    }, "fast")
                }).on("mouseleave" + f, function() {
                    var b = a(this).find(".cbp-caption-activeWrap");
                    b.animate({
                        left: b.width()
                    }, "fast")
                })
            },
            _revealLeftCaptionDestroy: function() {
                var b = this,
                    c = a(".cbp-caption");
                ("ie8" === b.browser || "ie9" === b.browser) && (c.off("mouseenter" + f + " mouseleave" + f), c.find(".cbp-caption-activeWrap").removeAttr("style"))
            },
            _minimalCaption: function() {},
            _minimalCaptionDestroy: function() {},
            _fadeInCaption: function() {
                var b, c = this;
                ("ie8" === c.browser || "ie9" === c.browser) && (b = "ie9" === c.browser ? 1 : .8, a(".cbp-caption").on("mouseenter" + f, function() {
                    a(this).find(".cbp-caption-activeWrap").animate({
                        opacity: b
                    }, "fast")
                }).on("mouseleave" + f, function() {
                    a(this).find(".cbp-caption-activeWrap").animate({
                        opacity: 0
                    }, "fast")
                }))
            },
            _fadeInCaptionDestroy: function() {
                var b = this,
                    c = a(".cbp-caption");
                ("ie8" === b.browser || "ie9" === b.browser) && (c.off("mouseenter" + f + " mouseleave" + f), c.find(".cbp-caption-activeWrap").removeAttr("style"))
            },
            _overlayRightAlongCaption: function() {
                var b = this;
                ("ie8" === b.browser || "ie9" === b.browser) && a(".cbp-caption").on("mouseenter" + f, function() {
                    var b = a(this),
                        c = b.find(".cbp-caption-defaultWrap"),
                        d = b.find(".cbp-caption-activeWrap");
                    c.animate({
                        left: d.width() / 2
                    }, "fast"), d.animate({
                        left: 0
                    }, "fast")
                }).on("mouseleave" + f, function() {
                    var b = a(this),
                        c = b.find(".cbp-caption-defaultWrap"),
                        d = b.find(".cbp-caption-activeWrap");
                    c.animate({
                        left: 0
                    }, "fast"), d.animate({
                        left: -d.width()
                    }, "fast")
                })
            },
            _overlayRightAlongCaptionDestroy: function() {
                var b = this,
                    c = a(".cbp-caption");
                ("ie8" === b.browser || "ie9" === b.browser) && (c.off("mouseenter" + f + " mouseleave" + f), c.find(".cbp-caption-defaultWrap").removeAttr("style"), c.find(".cbp-caption-activeWrap").removeAttr("style"))
            },
            _overlayBottomAlongCaption: function() {
                var b = this;
                ("ie8" === b.browser || "ie9" === b.browser) && a(".cbp-caption").on("mouseenter" + f, function() {
                    var b = a(this),
                        c = b.find(".cbp-caption-defaultWrap"),
                        d = b.find(".cbp-caption-activeWrap");
                    c.animate({
                        bottom: d.height() / 2
                    }, "fast"), d.animate({
                        bottom: 0
                    }, "fast")
                }).on("mouseleave" + f, function() {
                    var b = a(this),
                        c = b.find(".cbp-caption-defaultWrap"),
                        d = b.find(".cbp-caption-activeWrap");
                    c.animate({
                        bottom: 0
                    }, "fast"), d.animate({
                        bottom: -d.height()
                    }, "fast")
                })
            },
            _overlayBottomAlongCaptionDestroy: function() {
                var b = this,
                    c = a(".cbp-caption");
                ("ie8" === b.browser || "ie9" === b.browser) && (c.off("mouseenter" + f + " mouseleave" + f), c.find(".cbp-caption-defaultWrap").removeAttr("style"), c.find(".cbp-caption-activeWrap").removeAttr("style"))
            },
            _zoomCaption: function() {
                var b, c = this;
                ("ie8" === c.browser || "ie9" === c.browser) && (b = "ie9" === c.browser ? 1 : .8, a(".cbp-caption").on("mouseenter" + f, function() {
                    a(this).find(".cbp-caption-activeWrap").animate({
                        opacity: b
                    }, "fast")
                }).on("mouseleave" + f, function() {
                    a(this).find(".cbp-caption-activeWrap").animate({
                        opacity: 0
                    }, "fast")
                }))
            },
            _zoomCaptionDestroy: function() {
                var b = this,
                    c = a(".cbp-caption");
                ("ie8" === b.browser || "ie9" === b.browser) && (c.off("mouseenter" + f + " mouseleave" + f), c.find(".cbp-caption-activeWrap").removeAttr("style"))
            },
            _initCSSandEvents: function() {
                var c, e, g, h, i = this;
                a(b).on("resize" + f, function() {
                    c && clearTimeout(c), c = setTimeout(function() {
                        if ("ie8" === i.browser) {
                            if (h = a(b).width(), g !== d && g === h) return;
                            g = h
                        }
                        i.$obj.removeClass("cbp-no-transition cbp-appendItems-loading"), "responsive" === i.options.gridAdjustment && i._responsiveLayout(), i._layout(), i._processStyle(i.transition), i._resizeMainContainer(i.transition), i.lightbox && i.lightbox.resizeImage(), i.singlePage && i.singlePage.options.singlePageStickyNavigation && (e = i.singlePage.wrap[0].clientWidth, e > 0 && (i.singlePage.navigationWrap.width(e), i.singlePage.navigation.width(e))), i.singlePageInline && i.singlePageInline.isOpen && i.singlePageInline.close()
                    }, 50)
                })
            },
            _load: function() {
                var b, c, d, e = this,
                    g = [],
                    h = /url\((['"]?)(.*?)\1\)/g;
                if (d = e.$obj.children().css("backgroundImage"))
                    for (var i; i = h.exec(d);) g.push({
                        src: i[2]
                    });
                e.$obj.find("*").each(function() {
                    var b = a(this);
                    if (b.is("img:uncached") && g.push({
                            src: b.attr("src"),
                            element: b[0]
                        }), d = b.css("backgroundImage"))
                        for (var c; c = h.exec(d);) g.push({
                            src: c[2],
                            element: b[0]
                        })
                });
                var j = g.length,
                    k = 0;
                0 === j && e._beforeDisplay();
                var l = function() {
                    return k++, k === j ? (e._beforeDisplay(), !1) : void 0
                };
                for (b = 0; j > b; b++) c = new Image, a(c).on("load" + f + " error" + f, l), c.src = g[b].src
            },
            _beforeDisplay: function() {
                var a = this;
                a.options.animationType && (a["_" + a.options.animationType + "Init"] && a["_" + a.options.animationType + "Init"](), a.$obj.addClass("cbp-animation-" + a.options.animationType), a.localColumnWidth = a.blocks.eq(0).outerWidth() + a.options.gapVertical, a._filterFromUrl(), "" === a.options.defaultFilter || "*" === a.options.defaultFilter ? a._display() : a.filter(a.options.defaultFilter, function() {
                    a._display()
                }, a))
            },
            _filterFromUrl: function() {
                var a = this,
                    b = /#cbpf=(.*?)([#|?&]|$)/gi.exec(location.href);
                null !== b && (a.options.defaultFilter = b[1])
            },
            _display: function() {
                var b, d, e = this,
                    h = a(c.body);
                "responsive" === e.options.gridAdjustment && e._responsiveLayout(), e._layout(), e._processStyle("css"), e._resizeMainContainer("css"), ("lazyLoading" === e.options.displayType || "fadeIn" === e.options.displayType) && e.$ul.animate({
                    opacity: 1
                }, e.options.displayTypeSpeed), "fadeInToTop" === e.options.displayType && e.$ul.animate({
                    opacity: 1,
                    marginTop: 0
                }, e.options.displayTypeSpeed, function() {
                    e.$ul.css({
                        marginTop: 0
                    }), e.$ulClone.css({
                        marginTop: 0
                    })
                }), "sequentially" === e.options.displayType && (b = 0, e.blocks.css("opacity", 0), function i() {
                    d = e.blocksAvailable.eq(b++), d.length && (d.animate({
                        opacity: 1
                    }), setTimeout(i, e.options.displayTypeSpeed))
                }()), "bottomToTop" === e.options.displayType && (b = 0, e.blocks.css({
                    opacity: 0,
                    marginTop: 80
                }), function j() {
                    d = e.blocksAvailable.eq(b++), d.length ? (d.animate({
                        opacity: 1,
                        marginTop: 0
                    }, 400), setTimeout(j, e.options.displayTypeSpeed)) : (e.blocks.css({
                        marginTop: 0
                    }), e.blocksClone && e.blocksClone.css({
                        marginTop: 0
                    }))
                }()), setTimeout(function() {
                    e.$obj.removeClass("cbp-loading"), e._triggerEvent("initFinish"), e.$obj.trigger("initComplete" + f), e.$obj.addClass("cbp-ready")
                }, 0), e.lightbox = null, e.$obj.find(e.options.lightboxDelegate) && (e.lightbox = Object.create(g), e.lightbox.init(e, "lightbox"), e.$obj.on("click" + f, e.options.lightboxDelegate, function(b) {
                    b.preventDefault();
                    var c = a(this);
                    c.closest(a(".cbp-popup-singlePageInline")).length || e.lightbox.openLightbox(e.blocksAvailable.find(e.options.lightboxDelegate), this)
                })), 1 != h.data("cbpLightboxIsOn") && (h.on("click" + f, e.options.lightboxDelegate, function(b) {
                    b.preventDefault();
                    var c = a(this),
                        d = c.data("cbpLightbox");
                    c.closest(a(".cbp-wrapper")).length || (d ? e.lightbox.openLightbox(a(e.options.lightboxDelegate).filter("[data-cbp-lightbox=" + d + "]"), this) : e.lightbox.openLightbox(c, this))
                }), h.data("cbpLightboxIsOn", !0)), e.singlePage = null, e.$obj.find(e.options.singlePageDelegate) && (e.singlePage = Object.create(g), e.singlePage.init(e, "singlePage"), e.$obj.on("click" + f, e.options.singlePageDelegate, function(a) {
                    a.preventDefault(), e.singlePage.openSinglePage(e.blocksAvailable.find(e.options.singlePageDelegate), this)
                })), 1 != h.data("cbpSinglePageIsOn") && (h.on("click" + f, e.options.singlePageDelegate, function(b) {
                    b.preventDefault();
                    var c = a(this),
                        d = c.data("cbpSinglepage");
                    c.closest(a(".cbp")).length || (d ? e.singlePage.openSinglePage(a(e.options.singlePageDelegate).filter("[data-cbp-singlePage=" + d + "]"), this) : e.singlePage.openSinglePage(c, this))
                }), h.data("cbpSinglePageIsOn", !0)), e.singlePageInline = null, e.$obj.find(e.options.singlePageInlineDelegate) && (e.singlePageInline = Object.create(g), e.singlePageInline.init(e, "singlePageInline"), e.$obj.on("click" + f, e.options.singlePageInlineDelegate, function(a) {
                    a.preventDefault(), e.singlePageInline.openSinglePageInline(e.blocksAvailable, this)
                }))
            },
            _layout: function() {
                var b = this;
                b._layoutReset(), b.blocksAvailable.each(function(c, d) {
                    var e = a(d),
                        f = Math.ceil(e.outerWidth() / b.localColumnWidth),
                        g = 0;
                    if (f = Math.min(f, b.cols), b.singlePageInline && c >= b.singlePageInline.matrice[0] && c <= b.singlePageInline.matrice[1] && (g = b.singlePageInline.height), 1 === f) b._placeBlocks(e, b.colVert, g);
                    else {
                        var h, i, j = b.cols + 1 - f,
                            k = [];
                        for (i = 0; j > i; i++) h = b.colVert.slice(i, i + f), k[i] = Math.max.apply(Math, h);
                        b._placeBlocks(e, k, g)
                    }
                }), b.$obj.removeClass(function(a, b) {
                    return (b.match(/\bcbp-cols-\d+/gi) || []).join(" ")
                }), b.$obj.addClass("cbp-cols-" + b.cols)
            },
            _layoutReset: function() {
                var a, b = this;
                for ("alignCenter" === b.options.gridAdjustment ? (b.$obj.attr("style", ""), b.width = b.$obj.width(), b.cols = Math.max(Math.floor((b.width + b.options.gapVertical) / b.localColumnWidth), 1), b.width = b.cols * b.localColumnWidth - b.options.gapVertical, b.$obj.css("max-width", b.width)) : (b.width = b.$obj.width(), b.cols = Math.max(Math.floor((b.width + b.options.gapVertical) / b.localColumnWidth), 1)), b.colVert = [], a = b.cols; a--;) b.colVert.push(0)
            },
            _responsiveLayout: function() {
                var b, c, d = this;
                d.columnWidthCache ? d.localColumnWidth = d.columnWidthCache : d.columnWidthCache = d.localColumnWidth, d.width = d.$obj.outerWidth() + d.options.gapVertical, d.cols = Math.max(Math.round(d.width / d.localColumnWidth), 1), c = d.width - d.options.gapVertical * d.cols, d.localColumnWidth = parseInt(c / d.cols, 10) + d.options.gapVertical, b = d.localColumnWidth / d.columnWidthCache, d.blocks.each(function() {
                    var c = a(this),
                        e = a.data(this, "cbp-wxh");
                    e || (e = a.data(this, "cbp-wxh", {
                        width: c.outerWidth(),
                        height: c.outerHeight()
                    })), c.css("width", d.localColumnWidth - d.options.gapVertical), c.css("height", Math.floor(e.height * b))
                }), d.blocksClone && d.blocksClone.each(function() {
                    var c = a(this),
                        e = a.data(this, "cbp-wxh");
                    e || (e = a.data(this, "cbp-wxh", {
                        width: c.outerWidth(),
                        height: c.outerHeight()
                    })), c.css("width", d.localColumnWidth - d.options.gapVertical), c.css("height", Math.floor(e.height * b))
                })
            },
            _resizeMainContainer: function(a, b) {
                var c = this;
                b = b || 0, c.height = Math.max.apply(Math, c.colVert) + b, c.$obj[a]({
                    height: c.height - c.options.gapHorizontal
                }, 400)
            },
            _processStyle: function(a) {
                for (var b = this, c = b.styleQueue.length - 1; c >= 0; c--) b.styleQueue[c].$el[a](b.styleQueue[c].style);
                b.styleQueue = []
            },
            _placeBlocks: function(a, b, c) {
                var d, e, f, g, h, i, j = this,
                    k = Math.min.apply(Math, b),
                    l = 0;
                for (h = 0, i = b.length; i > h; h++)
                    if (b[h] === k) {
                        l = h;
                        break
                    }
                for (j.singlePageInline && 0 !== c && (j.singlePageInline.top = k), k += c, d = Math.round(j.localColumnWidth * l), e = Math.round(k), j.styleQueue.push({
                        $el: a,
                        style: j.supportCSSTransform ? j._withCSS3(d, e) : j._withCSS2(d, e)
                    }), f = k + a.outerHeight() + j.options.gapHorizontal, g = j.cols + 1 - i, h = 0; g > h; h++) j.colVert[l + h] = f
            },
            _withCSS2: function(a, b) {
                return {
                    left: a,
                    top: b
                }
            },
            _withCSS3: function(a, b) {
                return {
                    translate: [a, b]
                }
            },
            _duplicateContent: function(a) {
                var b = this;
                b.$ulClone = b.$ul.clone(), b.blocksClone = b.$ulClone.children(), b.$ulClone.css(a), b.ulHidden = "clone", b.$obj.append(b.$ulClone)
            },
            _fadeOutFilter: function(a, b, c) {
                var d = this;
                "*" !== c && (b = b.filter(c), a = d.blocks.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")), b.removeClass("cbp-item-hidden"), d.blocksAvailable = d.blocks.filter(c), a.length && d.styleQueue.push({
                    $el: a,
                    style: {
                        opacity: 0
                    }
                }), b.length && d.styleQueue.push({
                    $el: b,
                    style: {
                        opacity: 1
                    }
                }), d._layout(), d._processStyle(d.transitionByFilter), d._resizeMainContainer(d.transition), setTimeout(function() {
                    d._filterFinish()
                }, 400)
            },
            _quicksandFilter: function(a, b, c) {
                var d = this;
                "*" !== c && (b = b.filter(c), a = d.blocks.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")), b.removeClass("cbp-item-hidden"), d.blocksAvailable = d.blocks.filter(c), a.length && d.styleQueue.push({
                    $el: a,
                    style: {
                        scale: .01,
                        opacity: 0
                    }
                }), b.length && d.styleQueue.push({
                    $el: b,
                    style: {
                        scale: 1,
                        opacity: 1
                    }
                }), d._layout(), d._processStyle(d.transitionByFilter), d._resizeMainContainer(d.transition), setTimeout(function() {
                    d._filterFinish()
                }, 400)
            },
            _flipOutFilter: function(a, b, c) {
                var d = this;
                "*" !== c && (b = b.filter(c), a = d.blocks.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")), b.removeClass("cbp-item-hidden"), d.blocksAvailable = d.blocks.filter(c), a.length && ("ie8" === d.browser || "ie9" === d.browser ? d.styleQueue.push({
                    $el: a,
                    style: {
                        opacity: 0
                    }
                }) : a.find(".cbp-item-wrapper").removeClass("cbp-animation-flipOut-in").addClass("cbp-animation-flipOut-out")), b.length && ("ie8" === d.browser || "ie9" === d.browser ? d.styleQueue.push({
                    $el: b,
                    style: {
                        opacity: 1
                    }
                }) : b.find(".cbp-item-wrapper").removeClass("cbp-animation-flipOut-out").addClass("cbp-animation-flipOut-in")), d._layout(), d._processStyle(d.transitionByFilter), d._resizeMainContainer(d.transition), setTimeout(function() {
                    d._filterFinish()
                }, 400)
            },
            _flipBottomFilter: function(a, b, c) {
                var d = this;
                "*" !== c && (b = b.filter(c), a = d.blocks.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")), b.removeClass("cbp-item-hidden"), d.blocksAvailable = d.blocks.filter(c), a.length && ("ie8" === d.browser || "ie9" === d.browser ? d.styleQueue.push({
                    $el: a,
                    style: {
                        opacity: 0
                    }
                }) : a.find(".cbp-item-wrapper").removeClass("cbp-animation-flipBottom-in").addClass("cbp-animation-flipBottom-out")), b.length && ("ie8" === d.browser || "ie9" === d.browser ? d.styleQueue.push({
                    $el: b,
                    style: {
                        opacity: 1
                    }
                }) : b.find(".cbp-item-wrapper").removeClass("cbp-animation-flipBottom-out").addClass("cbp-animation-flipBottom-in")), d._layout(), d._processStyle(d.transitionByFilter), d._resizeMainContainer(d.transition), setTimeout(function() {
                    d._filterFinish()
                }, 400)
            },
            _scaleSidesFilter: function(a, b, c) {
                var d = this;
                "*" !== c && (b = b.filter(c), a = d.blocks.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")), b.removeClass("cbp-item-hidden"), d.blocksAvailable = d.blocks.filter(c), a.length && ("ie8" === d.browser || "ie9" === d.browser ? d.styleQueue.push({
                    $el: a,
                    style: {
                        opacity: 0
                    }
                }) : a.find(".cbp-item-wrapper").removeClass("cbp-animation-scaleSides-in").addClass("cbp-animation-scaleSides-out")), b.length && ("ie8" === d.browser || "ie9" === d.browser ? d.styleQueue.push({
                    $el: b,
                    style: {
                        opacity: 1
                    }
                }) : b.find(".cbp-item-wrapper").removeClass("cbp-animation-scaleSides-out").addClass("cbp-animation-scaleSides-in")), d._layout(), d._processStyle(d.transitionByFilter), d._resizeMainContainer(d.transition), setTimeout(function() {
                    d._filterFinish()
                }, 400)
            },
            _skewFilter: function(a, b, c) {
                var d = this;
                "*" !== c && (b = b.filter(c), a = d.blocks.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")), b.removeClass("cbp-item-hidden"), d.blocksAvailable = d.blocks.filter(c), a.length && d.styleQueue.push({
                    $el: a,
                    style: {
                        skew: [50, 0],
                        scale: .01,
                        opacity: 0
                    }
                }), b.length && d.styleQueue.push({
                    $el: b,
                    style: {
                        skew: [0, 0],
                        scale: 1,
                        opacity: 1
                    }
                }), d._layout(), d._processStyle(d.transitionByFilter), d._resizeMainContainer(d.transition), setTimeout(function() {
                    d._filterFinish()
                }, 400)
            },
            _sequentiallyInit: function() {
                this.transitionByFilter = "css"
            },
            _sequentiallyFilter: function(a, b, c) {
                var d = this,
                    e = d.blocksAvailable;
                d.blocksAvailable = d.blocks.filter(c), d.$obj.addClass("cbp-no-transition"), "ie8" === d.browser || "ie9" === d.browser ? e[d.transition]({
                    top: "-=30",
                    opacity: 0
                }, 300) : e[d.transition]({
                    top: -30,
                    opacity: 0
                }), setTimeout(function() {
                    "*" !== c && (b = b.filter(c), a = d.blocks.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")), b.removeClass("cbp-item-hidden"), a.length && a.css({
                        display: "none"
                    }), b.length && b.css("display", "block"), d._layout(), d._processStyle(d.transitionByFilter), d._resizeMainContainer(d.transition), ("ie8" === d.browser || "ie9" === d.browser) && d.blocksAvailable.css("top", "-=30");
                    var e, f = 0;
                    ! function g() {
                        e = d.blocksAvailable.eq(f++), e.length ? (e[d.transition]("ie8" === d.browser || "ie9" === d.browser ? {
                            top: "+=30",
                            opacity: 1
                        } : {
                            top: 0,
                            opacity: 1
                        }), setTimeout(g, 130)) : setTimeout(function() {
                            d._filterFinish()
                        }, 600)
                    }()
                }, 600)
            },
            _fadeOutTopInit: function() {
                this.transitionByFilter = "css"
            },
            _fadeOutTopFilter: function(a, b, c) {
                var d = this;
                d.blocksAvailable = d.blocks.filter(c), "ie8" === d.browser || "ie9" === d.browser ? d.$ul[d.transition]({
                    top: -30,
                    opacity: 0
                }, 350) : d.$ul[d.transition]({
                    top: -30,
                    opacity: 0
                }), d.$obj.addClass("cbp-no-transition"), setTimeout(function() {
                    "*" !== c && (b = b.filter(c), a = d.blocks.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")), b.removeClass("cbp-item-hidden"), a.length && a.css("opacity", 0), b.length && b.css("opacity", 1), d._layout(), d._processStyle(d.transitionByFilter), d._resizeMainContainer(d.transition), "ie8" === d.browser || "ie9" === d.browser ? d.$ul[d.transition]({
                        top: 0,
                        opacity: 1
                    }, 350) : d.$ul[d.transition]({
                        top: 0,
                        opacity: 1
                    }), setTimeout(function() {
                        d._filterFinish()
                    }, 400)
                }, 400)
            },
            _boxShadowInit: function() {
                var a = this;
                "ie8" === a.browser || "ie9" === a.browser ? a.options.animationType = "fadeOut" : a.blocksAvailable.append('<div class="cbp-animation-boxShadowMask"></div>')
            },
            _boxShadowFilter: function(a, b, c) {
                var d = this;
                "*" !== c && (b = b.filter(c), a = d.blocks.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")), b.removeClass("cbp-item-hidden");
                var e = d.blocks.find(".cbp-animation-boxShadowMask");
                e.addClass("cbp-animation-boxShadowShow"), e.removeClass("cbp-animation-boxShadowActive cbp-animation-boxShadowInactive"), d.blocksAvailable = d.blocks.filter(c);
                var f = {};
                a.length && (a.find(".cbp-animation-boxShadowMask").addClass("cbp-animation-boxShadowActive"), d.styleQueue.push({
                    $el: a,
                    style: {
                        opacity: 0
                    }
                }), f = a.last()), b.length && (b.find(".cbp-animation-boxShadowMask").addClass("cbp-animation-boxShadowInactive"), d.styleQueue.push({
                    $el: b,
                    style: {
                        opacity: 1
                    }
                }), f = b.last()), d._layout(), f.length ? f.one(d.transitionEnd, function() {
                    e.removeClass("cbp-animation-boxShadowShow"), d._filterFinish()
                }) : (e.removeClass("cbp-animation-boxShadowShow"), d._filterFinish()), d._processStyle(d.transitionByFilter), d._resizeMainContainer(d.transition)
            },
            _bounceLeftInit: function() {
                var a = this;
                a._duplicateContent({
                    left: "-100%",
                    opacity: 0
                }), a.transitionByFilter = "css", a.$ul.addClass("cbp-wrapper-front")
            },
            _bounceLeftFilter: function(a, b, c) {
                var d, e, f, g = this;
                g.$obj.addClass("cbp-no-transition"), "clone" === g.ulHidden ? (g.ulHidden = "first", d = g.$ulClone, f = g.$ul, e = g.blocksClone) : (g.ulHidden = "clone", d = g.$ul, f = g.$ulClone, e = g.blocks), b = e.filter(".cbp-item-hidden"), "*" !== c && (b = b.filter(c), e.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")), b.removeClass("cbp-item-hidden"), g.blocksAvailable = e.filter(c), g._layout(), f[g.transition]({
                    left: "-100%",
                    opacity: 0
                }).removeClass("cbp-wrapper-front").addClass("cbp-wrapper-back"), d[g.transition]({
                    left: 0,
                    opacity: 1
                }).addClass("cbp-wrapper-front").removeClass("cbp-wrapper-back"), g._processStyle(g.transitionByFilter), g._resizeMainContainer(g.transition), setTimeout(function() {
                    g._filterFinish()
                }, 400)
            },
            _bounceTopInit: function() {
                var a = this;
                a._duplicateContent({
                    top: "-100%",
                    opacity: 0
                }), a.transitionByFilter = "css", a.$ul.addClass("cbp-wrapper-front")
            },
            _bounceTopFilter: function(a, b, c) {
                var d, e, f, g = this;
                g.$obj.addClass("cbp-no-transition"), "clone" === g.ulHidden ? (g.ulHidden = "first", d = g.$ulClone, f = g.$ul, e = g.blocksClone) : (g.ulHidden = "clone", d = g.$ul, f = g.$ulClone, e = g.blocks), b = e.filter(".cbp-item-hidden"), "*" !== c && (b = b.filter(c), e.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")), b.removeClass("cbp-item-hidden"), g.blocksAvailable = e.filter(c), g._layout(), f[g.transition]({
                    top: "-100%",
                    opacity: 0
                }).removeClass("cbp-wrapper-front").addClass("cbp-wrapper-back"), d[g.transition]({
                    top: 0,
                    opacity: 1
                }).addClass("cbp-wrapper-front").removeClass("cbp-wrapper-back"), g._processStyle(g.transitionByFilter), g._resizeMainContainer(g.transition), setTimeout(function() {
                    g._filterFinish()
                }, 400)
            },
            _bounceBottomInit: function() {
                var a = this;
                a._duplicateContent({
                    top: "100%",
                    opacity: 0
                }), a.transitionByFilter = "css"
            },
            _bounceBottomFilter: function(a, b, c) {
                var d, e, f, g = this;
                g.$obj.addClass("cbp-no-transition"), "clone" === g.ulHidden ? (g.ulHidden = "first", d = g.$ulClone, f = g.$ul, e = g.blocksClone) : (g.ulHidden = "clone", d = g.$ul, f = g.$ulClone, e = g.blocks), b = e.filter(".cbp-item-hidden"), "*" !== c && (b = b.filter(c), e.not(".cbp-item-hidden").not(c).addClass("cbp-item-hidden")), b.removeClass("cbp-item-hidden"), g.blocksAvailable = e.filter(c), g._layout(), f[g.transition]({
                    top: "100%",
                    opacity: 0
                }).removeClass("cbp-wrapper-front").addClass("cbp-wrapper-back"), d[g.transition]({
                    top: 0,
                    opacity: 1
                }).addClass("cbp-wrapper-front").removeClass("cbp-wrapper-back"), g._processStyle(g.transitionByFilter), g._resizeMainContainer(g.transition), setTimeout(function() {
                    g._filterFinish()
                }, 400)
            },
            _moveLeftInit: function() {
                var a = this;
                a._duplicateContent({
                    left: "100%",
                    opacity: 0
                }), a.$ulClone.addClass("no-trans"), a.transitionByFilter = "css"
            },
            _moveLeftFilter: function(a, b, c) {
                var d, e, f, g = this;
                "*" !== c && (b = b.filter(c)), b.removeClass("cbp-item-hidden"), g.$obj.addClass("cbp-no-transition"), "clone" === g.ulHidden ? (g.ulHidden = "first", d = g.$ulClone, f = g.$ul, e = g.blocksClone) : (g.ulHidden = "clone", d = g.$ul, f = g.$ulClone, e = g.blocks), e.css("opacity", 0), e.addClass("cbp-item-hidden"), g.blocksAvailable = e.filter(c), g.blocksAvailable.css("opacity", 1), g.blocksAvailable.removeClass("cbp-item-hidden"), g._layout(), f[g.transition]({
                    left: "-100%",
                    opacity: 0
                }), d.removeClass("no-trans"), "css" === g.transition ? (d[g.transition]({
                    left: 0,
                    opacity: 1
                }), f.one(g.transitionEnd, function() {
                    f.addClass("no-trans").css({
                        left: "100%",
                        opacity: 0
                    }), g._filterFinish()
                })) : d[g.transition]({
                    left: 0,
                    opacity: 1
                }, function() {
                    f.addClass("no-trans").css({
                        left: "100%",
                        opacity: 0
                    }), g._filterFinish()
                }), g._processStyle(g.transitionByFilter), g._resizeMainContainer(g.transition)
            },
            _slideLeftInit: function() {
                var a = this;
                a._duplicateContent({}), a.$ul.addClass("cbp-wrapper-front"), a.$ulClone.css("opacity", 0), a.transitionByFilter = "css"
            },
            _slideLeftFilter: function(a, b, c) {
                var d, e, f, g, h = this;
                h.blocks.show(), h.blocksClone.show(), "*" !== c && (b = b.filter(c)), b.removeClass("cbp-item-hidden"), h.$obj.addClass("cbp-no-transition"), h.blocks.find(".cbp-item-wrapper").removeClass("cbp-animation-slideLeft-out cbp-animation-slideLeft-in"), h.blocksClone.find(".cbp-item-wrapper").removeClass("cbp-animation-slideLeft-out cbp-animation-slideLeft-in"), h.$ul.css({
                    opacity: 1
                }), h.$ulClone.css({
                    opacity: 1
                }), "clone" === h.ulHidden ? (h.ulHidden = "first", e = h.blocks, f = h.blocksClone, d = h.blocksClone, h.$ul.removeClass("cbp-wrapper-front"), h.$ulClone.addClass("cbp-wrapper-front")) : (h.ulHidden = "clone", e = h.blocksClone, f = h.blocks, d = h.blocks, h.$ul.addClass("cbp-wrapper-front"), h.$ulClone.removeClass("cbp-wrapper-front")), d.css("opacity", 0), d.addClass("cbp-item-hidden"), h.blocksAvailable = d.filter(c), h.blocksAvailable.css({
                    opacity: 1
                }), h.blocksAvailable.removeClass("cbp-item-hidden"), h._layout(), "css" === h.transition ? (e.find(".cbp-item-wrapper").addClass("cbp-animation-slideLeft-out"), f.find(".cbp-item-wrapper").addClass("cbp-animation-slideLeft-in"), g = e.find(".cbp-item-wrapper").last(), g.length ? g.one(h.animationEnd, function() {
                    h._filterFinish()
                }) : h._filterFinish()) : (e.find(".cbp-item-wrapper").animate({
                    left: "-100%"
                }, 400, function() {
                    h._filterFinish()
                }), f.find(".cbp-item-wrapper").css("left", "100%"), f.find(".cbp-item-wrapper").animate({
                    left: 0
                }, 400)), h._processStyle(h.transitionByFilter), h._resizeMainContainer("animate")
            },
            _slideDelayInit: function() {
                this._wrapperFilterInit()
            },
            _slideDelayFilter: function(a, b, c) {
                this._wrapperFilter(a, b, c, "slideDelay", !0)
            },
            _3dflipInit: function() {
                this._wrapperFilterInit()
            },
            _3dflipFilter: function(a, b, c) {
                this._wrapperFilter(a, b, c, "3dflip", !0)
            },
            _rotateSidesInit: function() {
                this._wrapperFilterInit()
            },
            _rotateSidesFilter: function(a, b, c) {
                this._wrapperFilter(a, b, c, "rotateSides", !0)
            },
            _flipOutDelayInit: function() {
                this._wrapperFilterInit()
            },
            _flipOutDelayFilter: function(a, b, c) {
                this._wrapperFilter(a, b, c, "flipOutDelay", !1)
            },
            _foldLeftInit: function() {
                this._wrapperFilterInit()
            },
            _foldLeftFilter: function(a, b, c) {
                this._wrapperFilter(a, b, c, "foldLeft", !0)
            },
            _unfoldInit: function() {
                this._wrapperFilterInit()
            },
            _unfoldFilter: function(a, b, c) {
                this._wrapperFilter(a, b, c, "unfold", !0)
            },
            _scaleDownInit: function() {
                this._wrapperFilterInit()
            },
            _scaleDownFilter: function(a, b, c) {
                this._wrapperFilter(a, b, c, "scaleDown", !0)
            },
            _frontRowInit: function() {
                this._wrapperFilterInit()
            },
            _frontRowFilter: function(a, b, c) {
                this._wrapperFilter(a, b, c, "frontRow", !0)
            },
            _rotateRoomInit: function() {
                this._wrapperFilterInit()
            },
            _rotateRoomFilter: function(a, b, c) {
                this._wrapperFilter(a, b, c, "rotateRoom", !0)
            },
            _wrapperFilterInit: function() {
                var a = this;
                a._duplicateContent({}), a.$ul.addClass("cbp-wrapper-front"), a.$ulClone.css("opacity", 0), a.transitionByFilter = "css"
            },
            _wrapperFilter: function(b, c, d, e, f) {
                var g, h, i, j, k = this;
                if (k.blocks.show(), k.blocksClone.show(), "*" !== d && (c = c.filter(d)), c.removeClass("cbp-item-hidden"), k.$obj.addClass("cbp-no-transition"), k.blocks.find(".cbp-item-wrapper").removeClass("cbp-animation-" + e + "-out cbp-animation-" + e + "-in cbp-animation-" + e + "-fadeOut").css("style", ""), k.blocksClone.find(".cbp-item-wrapper").removeClass("cbp-animation-" + e + "-out cbp-animation-" + e + "-in cbp-animation-" + e + "-fadeOut").css("style", ""), k.$ul.css({
                        opacity: 1
                    }), k.$ulClone.css({
                        opacity: 1
                    }), "clone" === k.ulHidden ? (k.ulHidden = "first", g = k.blocksClone, k.$ul.removeClass("cbp-wrapper-front"), k.$ulClone.addClass("cbp-wrapper-front")) : (k.ulHidden = "clone", g = k.blocks, k.$ul.addClass("cbp-wrapper-front"), k.$ulClone.removeClass("cbp-wrapper-front")), h = k.blocksAvailable, g.css("opacity", 0), g.addClass("cbp-item-hidden"), k.blocksAvailable = g.filter(d), k.blocksAvailable.css({
                        opacity: 1
                    }), k.blocksAvailable.removeClass("cbp-item-hidden"), i = k.blocksAvailable, k._layout(), "css" === k.transition) {
                    var l = 0,
                        m = 0;
                    i.each(function(b, c) {
                        a(c).find(".cbp-item-wrapper").addClass("cbp-animation-" + e + "-in").css("animation-delay", m / 20 + "s"), m++
                    }), h.each(function(b, c) {
                        l >= m && f ? a(c).find(".cbp-item-wrapper").addClass("cbp-animation-" + e + "-fadeOut") : a(c).find(".cbp-item-wrapper").addClass("cbp-animation-" + e + "-out").css("animation-delay", l / 20 + "s"), l++
                    }), j = h.find(".cbp-item-wrapper").first(), j.length ? j.one(k.animationEnd, function() {
                        k._filterFinish(), ("ie10" === k.browser || "ie11" === k.browser) && setTimeout(function() {
                            a(".cbp-item-wrapper").removeClass("cbp-animation-" + e + "-in")
                        }, 300)
                    }) : (k._filterFinish(), ("ie10" === k.browser || "ie11" === k.browser) && setTimeout(function() {
                        a(".cbp-item-wrapper").removeClass("cbp-animation-" + e + "-in")
                    }, 300))
                } else h.find(".cbp-item-wrapper").animate({
                    left: "-100%"
                }, 400, function() {
                    k._filterFinish()
                }), i.find(".cbp-item-wrapper").css("left", "100%"), i.find(".cbp-item-wrapper").animate({
                    left: 0
                }, 400);
                k._processStyle(k.transitionByFilter), k._resizeMainContainer("animate")
            },
            _filterFinish: function() {
                var a = this;
                a.isAnimating = !1, a._triggerEvent("filterFinish"), a.$obj.trigger("filterComplete" + f)
            },
            _registerEvent: function(a, b, c) {
                var d = this;
                d.registeredEvents[a] || (d.registeredEvents[a] = [], d.registeredEvents.push(a)), d.registeredEvents[a].push({
                    func: b,
                    oneTime: c || !1
                })
            },
            _triggerEvent: function(a) {
                var b = this;
                if (b.registeredEvents[a])
                    for (var c = b.registeredEvents[a].length - 1; c >= 0; c--) b.registeredEvents[a][c].func.call(b), b.registeredEvents[a][c].oneTime && b.registeredEvents[a].splice(c, 1)
            },
            init: function(b, c) {
                var d = a.data(this, "cubeportfolio");
                if (d) throw new Error("cubeportfolio is already initialized. Please destroy it before initialize again!");
                d = a.data(this, "cubeportfolio", Object.create(i)), d._main(this, b, c)
            },
            destroy: function(c) {
                var d = a.data(this, "cubeportfolio");
                if (!d) throw new Error("cubeportfolio is not initialized. Please initialize before calling destroy method!");
                a.isFunction(c) && d._registerEvent("destroyFinish", c, !0), a.removeData(this, "cubeportfolio"), a.each(d.blocks, function() {
                    a.removeData(this, "transformFn"), a.removeData(this, "cbp-wxh")
                }), d.$obj.removeClass("cbp cbp-loading cbp-ready cbp-no-transition"), d.$ul.removeClass("cbp-wrapper-front cbp-wrapper-back cbp-wrapper no-trans").removeAttr("style"), d.$obj.removeAttr("style"), d.$ulClone && d.$ulClone.remove(), d.browser && d.$obj.removeClass("cbp-" + d.browser), a(b).off("resize" + f), d.lightbox && d.lightbox.destroy(), d.singlePage && d.singlePage.destroy(), d.singlePageInline && d.singlePageInline.destroy(), d.blocks.removeClass("cbp-item-hidden").removeAttr("style"), d.blocks.find(".cbp-item-wrapper").children().unwrap(), d.options.caption && d._captionDestroy(), d.options.animationType && ("boxShadow" === d.options.animationType && a(".cbp-animation-boxShadowMask").remove(), d.$obj.removeClass("cbp-animation-" + d.options.animationType)), d._triggerEvent("destroyFinish")
            },
            filter: function(b, c, d) {
                var e, f, g, h = d || a.data(this, "cubeportfolio");
                if (!h) throw new Error("cubeportfolio is not initialized. Please initialize before calling filter method!");
                b = "*" === b || "" === b ? "*" : b, h.isAnimating || h.defaultFilter === b || ("ie8" === h.browser || "ie9" === h.browser ? h.$obj.removeClass("cbp-no-transition cbp-appendItems-loading") : (h.obj.classList.remove("cbp-no-transition"), h.obj.classList.remove("cbp-appendItems-loading")), h.defaultFilter = b, h.isAnimating = !0, a.isFunction(c) && h._registerEvent("filterFinish", c, !0), e = h.blocks.filter(".cbp-item-hidden"), f = [], h.singlePageInline && h.singlePageInline.isOpen ? h.singlePageInline.close("promise", {
                    callback: function() {
                        h["_" + h.options.animationType + "Filter"](f, e, b)
                    }
                }) : h["_" + h.options.animationType + "Filter"](f, e, b), h.options.filterDeeplinking && (g = location.href.replace(/#cbpf=(.*?)([#|?&]|$)/gi, ""), location.href = g + "#cbpf=" + b, h.singlePage && h.singlePage.url && (h.singlePage.url = location.href)))
            },
            showCounter: function(b, c) {
                var d = a.data(this, "cubeportfolio");
                if (!d) throw new Error("cubeportfolio is not initialized. Please initialize before calling showCounter method!");
                d.elems = b, a.each(b, function() {
                    var b, c = a(this),
                        e = c.data("filter");
                    e = "*" === e || "" === e ? "*" : e, b = d.blocks.filter(e).length, c.find(".cbp-filter-counter").text(b)
                }), a.isFunction(c) && c.call(d)
            },
            appendItems: function(b, c) {
                var d = this,
                    e = a.data(d, "cubeportfolio");
                if (!e) throw new Error("cubeportfolio is not initialized. Please initialize before calling appendItems method!");
                e.singlePageInline && e.singlePageInline.isOpen ? e.singlePageInline.close("promise", {
                    callback: function() {
                        i._addItems.call(d, b, c)
                    }
                }) : i._addItems.call(d, b, c)
            },
            _addItems: function(b, c) {
                var d, e, f, g, h = a.data(this, "cubeportfolio");
                a.isFunction(c) && h._registerEvent("appendItemsFinish", c, !0), h.$obj.addClass("cbp-no-transition cbp-appendItems-loading"), b = a(b).css("opacity", 0), b.filter(".cbp-item").wrapInner('<div class="cbp-item-wrapper"></div>'), g = b.filter(h.defaultFilter), h.ulHidden ? "first" === h.ulHidden ? (b.appendTo(h.$ulClone), h.blocksClone = h.$ulClone.children(), e = h.blocksClone, f = b.clone(), f.appendTo(h.$ul), h.blocks = h.$ul.children()) : (b.appendTo(h.$ul), h.blocks = h.$ul.children(), e = h.blocks, f = b.clone(), f.appendTo(h.$ulClone), h.blocksClone = h.$ulClone.children()) : (b.appendTo(h.$ul), h.blocks = h.$ul.children(), e = h.blocks), h.options.caption && (h._captionDestroy(), h._captionInit()), d = h.defaultFilter, h.blocksAvailable = e.filter(d), e.not(".cbp-item-hidden").not(d).addClass("cbp-item-hidden"), "responsive" === h.options.gridAdjustment && h._responsiveLayout(), h._layout(), h._processStyle(h.transitionByFilter), h._resizeMainContainer("animate");
                var j = b.filter(".cbp-item-hidden");
                switch (h.options.animationType) {
                    case "flipOut":
                        j.find(".cbp-item-wrapper").addClass("cbp-animation-flipOut-out");
                        break;
                    case "scaleSides":
                        j.find(".cbp-item-wrapper").addClass("cbp-animation-scaleSides-out");
                        break;
                    case "flipBottom":
                        j.find(".cbp-item-wrapper").addClass("cbp-animation-flipBottom-out")
                }
                g.animate({
                    opacity: 1
                }, 800, function() {
                    switch (h.options.animationType) {
                        case "bounceLeft":
                        case "bounceTop":
                        case "bounceBottom":
                            h.blocks.css("opacity", 1), h.blocksClone.css("opacity", 1);
                            break;
                        case "flipOut":
                        case "scaleSides":
                        case "flipBottom":
                            j.css("opacity", 1)
                    }
                }), h.elems && i.showCounter.call(this, h.elems), setTimeout(function() {
                    h._triggerEvent("appendItemsFinish")
                }, 900)
            },
            _initSlider: function() {
                var a = this,
                    b = Object.create(h);
                b._init(null, a)
            }
        };
    a.fn.cubeportfolio = function(a) {
        var b = arguments;
        return this.each(function() {
            if (i[a]) return i[a].apply(this, Array.prototype.slice.call(b, 1));
            if ("object" != typeof a && a) throw new Error("Method " + a + " does not exist on jQuery.cubeportfolio.js");
            return i.init.apply(this, b)
        })
    }, a.fn.cubeportfolio.options = {
        defaultFilter: "*",
        filterDeeplinking: !1,
        animationType: "fadeOut",
        gridAdjustment: "default",
        gapHorizontal: 10,
        gapVertical: 10,
        caption: "pushTop",
        displayType: "default",
        displayTypeSpeed: 400,
        lightboxDelegate: ".cbp-lightbox",
        lightboxGallery: !0,
        lightboxTitleSrc: "data-title",
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
        singlePageDelegate: ".cbp-singlePage",
        singlePageDeeplinking: !0,
        singlePageStickyNavigation: !0,
        singlePageCounter: '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
        singlePageAnimation: "left",
        singlePageCallback: function() {},
        singlePageInlineDelegate: ".cbp-singlePageInline",
        singlePageInlinePosition: "top",
        singlePageInlineInFocus: !0,
        singlePageInlineCallback: function() {}
    }
}(jQuery, window, document);