'use strict';

/**
 * Global list of key codes
 * with shift key pressed +1000
 * with alt key pressed +2000
 * @namespace
 */
var KEYS = {
	BACK         : 8,            RC_BACK         : 8,     /* Backspace */
	NUM1         : 49,           RC_1            : 49,
	NUM2         : 50,           RC_2            : 50,
	NUM3         : 51,           RC_3            : 51,
	NUM4         : 52,           RC_4            : 52,
	NUM5         : 53,           RC_5            : 53,
	NUM6         : 54,           RC_6            : 54,
	NUM7         : 55,           RC_7            : 55,
	NUM8         : 56,           RC_8            : 56,
	NUM9         : 57,           RC_9            : 57,
	NUM0         : 48,           RC_0            : 48,
	DELETE       : 46,
	CHANNEL_PREV : 1009,         RC_CHANNEL_DOWN : 1009,   /* Shift+Tab   */
	CHANNEL_NEXT : 9,            RC_CHANNEL_UP   : 9,      /* Tab         */
	OK           : 13,           RC_OK           : 13,     /* Enter       */
	EXIT         : 27,           RC_EXIT         : 27,     /* Esc         */
	UP           : 38,           RC_UP_ARROW     : 38,     /* UP ARROW    */
	DOWN         : 40,           RC_DOWN_ARROW   : 40,     /* DOWN ARROW  */
	LEFT         : 37,           RC_LEFT_ARROW   : 37,     /* LEFT ARROW  */
	RIGHT        : 39,           RC_RIGHT_ARROW  : 39,     /* RIGHT ARROW */
	PAGE_UP      : 33,                                     /* Page Up     */
	PAGE_DOWN    : 34,                                     /* Page Down   */
	END          : 35,
	HOME         : 36,           
	VOLUME_UP    : 107,          RC_VOLUME_UP      : 107,  /* NUMPAD +    */
	VOLUME_DOWN  : 109,          RC_VOLUME_DOWN    : 109,  /* NUMPAD -    */	
	F1           : 112,          RC_TELETEXT_RED   : 112,  /* F1          */
	F2           : 113,          RC_TELETEXT_GREEN : 113,  /* F2          */
	F3           : 114,          RC_TELETEXT_YELLOW: 114,  /* F3          */
	F4           : 115,          RC_TELETEXT_BLUE  : 115,  /* F4          */
	REFRESH      : 116,                                    /* F5          */
	FRAME        : 117,          RC_POWER_SWITCH   : 117,  /* F6          */
	PHONE        : 119,                                    /* F8          */
	EPG          : 119,                                    /* F8          */  
	SET          : 120,                                    /* F9          */
	TV           : 121,          RC_TV           : 121,    /* F10         */
	MENU         : 122,          RC_MENU         : 122,    /* F11         */
	WEB          : 123,                                    /* F12         */
	MIC          : 2032,
	REWIND       : 2066,                                 /* Alt+B       */
	FORWARD      : 2070,                                 /* Alt+F       */
	APP          : 2076,                                 /* Alt+L       */
	USB_MOUNTED  : 2080,                                 /* Alt+P       */
	USB_UNMOUNTED: 2081,                                 /* Alt+Q       */
	PLAY_PAUSE   : 2082,                                 /* Alt+R       */
	STOP         : 2083,                                 /* Alt+S       */
	POWER        : 2085,                                 /* Alt+U       */
	RECORD       : 2087,                                 /* Alt+W       */
	INFO         : 2089,                                 /* Alt+Y       */
	MUTE         : 2192,         RC_MUTE         : 2192,
	CLOCK        : 2032,
	AUDIO        : 2071,                                 /* Alt+G       */
	KEYBOARD     : 2076                                  /* Alt+L       */
};

var keyCode = KEYS;
