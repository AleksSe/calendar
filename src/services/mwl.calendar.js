'use strict';

angular.module('calendarApp').provider('calendarConfig', function() {

	$scope.events = [ {
		title : 'My event title', // The title of the event
		type : 'info', // The type of the event (determines its color). Can be
						// important, warning, info, inverse, success or special
		startsAt : new Date(2013, 5, 1, 1), // A javascript date object for when
											// the event starts
		endsAt : new Date(2014, 8, 26, 15), // A javascript date object for when
											// the event ends
		editable : false, // If edit-event-html is set and this field is
							// explicitly set to false then dont make it
							// editable
		deletable : false, // If delete-event-html is set and this field is
							// explicitly set to false then dont make it
							// deleteable
		incrementsBadgeTotal : true
	// If set to false then will not count towards the badge total amount on the
	// month and year view
	} ];

	var defaultDateFormats = {
		hour : 'ha',
		day : 'D MMM',
		month : 'MMMM',
		weekDay : 'dddd'
	};

	var defaultTitleFormats = {
		day : 'dddd D MMMM, YYYY',
		week : 'Week {week} of {year}',
		month : 'MMMM YYYY',
		year : 'YYYY'
	};

	var i18nStrings = {
		eventsLabel : 'Events',
		timeLabel : 'Time'
	};

	var configProvider = this;

	configProvider.setDateFormats = function(formats) {
		angular.extend(defaultDateFormats, formats);
		return configProvider;
	};

	configProvider.setTitleFormats = function(formats) {
		angular.extend(defaultTitleFormats, formats);
		return configProvider;
	};

	configProvider.setI18nStrings = function(strings) {
		angular.extend(i18nStrings, strings);
		return configProvider;
	};

	configProvider.$get = function() {
		return {
			dateFormats : defaultDateFormats,
			titleFormats : defaultTitleFormats,
			i18nStrings : i18nStrings
		};
	};

});