'use strict';

(function() {

  var toInstall = [
    {
      isPackage: false,
      manifest: 'https://mcjimenez.github.io/swshimclient/manifest.webapp'
    },
    {
      isPackage: false,
      manifest: 'https://mcjimenez.github.io/swshim/manifest.webapp'
    }
  ];

  function install() {
    console.log('CJC - Start installation...');
    for (var i = 0, l = toInstall.length; i < l; i++) {
      console.log('CJC - Install as ' +
                  (toInstall[i].isPackage ? 'package':'hosted') +
                  ':' + toInstall[i].manifest);
      if (toInstall[i].isPackage) {
        navigator.mozApps.installPackage(toInstall[i].manifest);
      } else {
	      navigator.mozApps.install(toInstall[i].manifest);
      }
    }
    console.log('CJC - Done!!');
  }

  // Testing purpose only!!!!
  window.addEventListener('load', function () {
    console.log('CJC - Loaded shim installer');
    var installBto = document.getElementById('install');
    installBto.addEventListener('click', install);
  });

  console.log('CJC - install.js loaded');
})();
