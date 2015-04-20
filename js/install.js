'use strict';

(function() {

  var client = {
    isPackage: false,
    manifest: 'https://mcjimenez.github.io/swshimclient/manifest.webapp'
  };

  var server = {
    isPackage: false,
    manifest: 'https://mcjimenez.github.io/swshim/manifest.webapp'
  };

  function install(app) {
    console.log('CJC - Start installation...' + JSON.stringify(app));
    if (!app) {
      console.log('CJC - App does not received!');
      return;
    }

    console.log('CJC - Install as ' +
                (app.isPackage ? 'package':'hosted') +
                ':' + app.manifest);
    var request;
    if (app.isPackage) {
      request = navigator.mozApps.installPackage(app.manifest);
    } else {
      request = navigator.mozApps.install(app.manifest);
    }

    request.onsuccess = function () {
      console.log('CJC - Installation successful! ' + app.manifest);
    };
    request.onerror = function () {
      // Display the error information from the DOMError object
      alert(app.manifest + ' Install failed, error: ' + request.error.name);
    };
  }

  // Testing purpose only!!!!
  window.addEventListener('load', function () {
    console.log('CJC - Loaded shim installer');
    var installBtoClient = document.getElementById('installclient');
    var installBtoServer = document.getElementById('installserver');
    installBtoClient.addEventListener('click', install.bind(null, client));
    installBtoServer.addEventListener('click', install.bind(null, server));
  });

  console.log('CJC - install.js loaded');
})();
