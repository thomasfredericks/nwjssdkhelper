
let gui = require('nw.gui');
let win = gui.Window.get();

// SDK STUFF
if ( process.versions['nw-flavor']=="sdk" ) {
	win.showDevTools();
	console.log("SDK> To refresh the code, type ctl+r in main window or this window");

	document.addEventListener('keydown', (event) => {
	const keyName = event.key;

	if (keyName === 'Control') {
		// do not alert when only Control key is pressed.
		return;
	}

	if (event.ctrlKey) {
		// Even though event.key is not 'Control' (e.g., 'a' is pressed),
		// event.ctrlKey may be true if Ctrl key is pressed at the same time.
		//console.log(`Combination of ctrlKey + ${keyName}`);
		if ( keyName == 'r' ) {			
			
			win.reload(); //location.reload();
		}
	} else {
		//console.log(`Key pressed ${keyName}`);
	}
	}, false);

// close devTools-crashes in windows if not done before reloading
	window.addEventListener("beforeunload", function(e){
   		win.closeDevTools();
	}, false);

	
}