import buffer from "node:buffer";
import { webcrypto } from "node:crypto";

//#region ../../node_modules/.pnpm/@sveltejs+kit@2.38.1_@opentelemetry+api@1.9.0_@sveltejs+vite-plugin-svelte@3.1.2_svelte@5.38._6d5mrq4iqmgmgher4yvj2wgwxi/node_modules/@sveltejs/kit/src/exports/node/polyfills.js
const File = buffer.File;
/** @type {Record<string, any>} */
const globals = {
	crypto: webcrypto,
	File
};
/**
* Make various web APIs available as globals:
* - `crypto`
* - `File`
*/
function installPolyfills() {
	for (const name in globals) {
		if (name in globalThis) continue;
		Object.defineProperty(globalThis, name, {
			enumerable: true,
			configurable: true,
			writable: true,
			value: globals[name]
		});
	}
}

//#endregion
//#region src/shims.js
installPolyfills();

//#endregion