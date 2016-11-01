'use strict';

var Chart = require('../lib');
var $ = require('./help');

var plots;

function init() {
	plots = $.cls('chart').map(function (el, i) {
		var n = Number(el.getAttribute('data-count'));
		var o = JSON.parse(el.getAttribute('data-options') || '{}');
		o.target = '#' + el.id;

		var btn = $.qs('button', el.parentNode);
		$.on(btn, 'click touch', update);
		btn.index = i;

		var chart = new Chart(o);
		chart.render($.gen(n));

		return {c: chart, n: n};
	});
}

function update () {
	var o = plots[this.index];
	(this.index > -1) && o.c.update($.gen(o.n));
};

$.on(document, 'DOMContentLoaded', init);
