// Main
angular.module('HypeMachine', ['ngRoute'])
.controller('FilterController', function() { // Filter to Tabs Latest, Loved, Posted
	this.tab = 1; // default first tab selected 
	this.selectTab = function(setTab) {
		this.tab = setTab; // selects the tab category chosen
	};
	this.isSelected = function(checkTab) {
		return this.tab === checkTab; // changes selected hover(class) to true and the others to false
	};
})
.filter('secondsToDateTime', function() { // Convert seconds to 0:00
  return function(seconds) {
    var time = new Date(0,0,0,0,0,0,0); // format hs:mm:ss
    time.setSeconds(seconds);
    return time;
  };
}).filter('searchText', function() { // Search across all fields filtering with a string
  var searchText = element(by.model('searchText'));
  // type of character to search
  searchText.clear();
  searchText.sendKeys('a');
  expectTrackTitles(['The', 'feat', 'Remix'], 'request');
  // type of number to search
  searchText.clear();
  searchText.sendKeys('77');
  expectTrackTitles(['a', 'no'], 'request');
  // It's possible to insert more like : , @ , !
});
// angular filter in module ng
var expectTrackTitles = function(expectTitles, key) {
  element.all(by.repeater(key + ' in requests').column(key + '.title')).then(function(arr) {
    arr.forEach(function(wd, i) {
      expect(wd.getText()).toMatch(expectTitles[i]);
    });
  });
};