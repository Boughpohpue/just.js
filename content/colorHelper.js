export class ColorHelper {
	static channels2hex(channels) {
		if (!channels || !Array.isArray(channels)
		|| channels.length < 3 || channels.length > 4)
			throw new Error("Invalid argument format!");
		return `#${channels.map((ch) => Colors.#dec2hex(ch)).join("")}`;
	}
	static rgb2hex(r, g, b) {
		return Colors.channels2hex([r, g, b]);
	}
	static argb2hex(a, r, g, b) {
		return Colors.channels2hex([a, r, g, b]);
	}
	static rgba2hex(r, g, b, a) {
		return Colors.channels2hex([a * 255, r, g, b]);
	}
	static hex2argb(hex) {
		hex = hex.startsWith('#') ? hex.substring(1) : hex;
		let channels = [];
		if (hex.length == 6) channels.push(255);
		for (var x = 0; x <= hex.length - 1; x += 2)
			channels.push(parseInt(hex.substring(x, x + 2), 16));
		return channels;
	}
	static hex2rgba(hex) {
		hex = hex.startsWith('#') ? hex.substring(1) : hex;
		let alpha = 1.0;
		if (hex.length === 8) {
			alpha = parseInt(hex.substring(0, 2), 16) / 255;
			hex = hex.substring(2);
		}
		let channels = [];
		for (var x = 0; x <= hex.length - 1; x += 2)
			channels.push(parseInt(hex.substring(x, x + 2), 16));
		return (channels, alpha);
	}
	static hex2rgb(hex) {
		hex = hex.startsWith('#') ? hex.substring(1) : hex;
		hex = hex.length === 8 ? hex.substring(2) : hex;
		let channels = [];
		for (var x = 0; x <= hex.length - 1; x += 2)
			channels.push(parseInt(hex.substring(x, x + 2), 16));
		return channels;
	}
	static calculateColorRgb(hexFrom, hexTo, percent) {
		const rgbFrom = Colors.hex2rgb(hexFrom);
		const rgbTo = Colors.hex2rgb(hexTo);
		const colorRgb = [];
		colorRgb.push(Colors.calculateChannel(rgbFrom[0], rgbTo[0], percent));
		colorRgb.push(Colors.calculateChannel(rgbFrom[1], rgbTo[1], percent));
		colorRgb.push(Colors.calculateChannel(rgbFrom[2], rgbTo[2], percent));
		return colorRgb;
	}
	static calculateColorArgb(hexFrom, hexTo, percent) {
		const argbFrom = Colors.hex2argb(hexFrom);
		const argbTo = Colors.hex2argb(hexTo);
		const colorArgb = [];
		colorArgb.push(Colors.calculateChannel(argbFrom[0], argbTo[0], percent));
		colorArgb.push(Colors.calculateChannel(argbFrom[1], argbTo[1], percent));
		colorArgb.push(Colors.calculateChannel(argbFrom[2], argbTo[2], percent));
		colorArgb.push(Colors.calculateChannel(argbFrom[3], argbTo[3], percent));
		return colorArgb;
	}
	static calculateRgbHex(hexFrom, hexTo, percent) {
		return Colors.channels2hex(calculateColorRgb(hexFrom, hexTo, percent));
	}
	static calculateArgbHex(hexFrom, hexTo, percent) {
		return Colors.channels2hex(calculateColorArgb(hexFrom, hexTo, percent));
	}
	static calculateChannel(channelFrom, channelTo, percent) {
		channelFrom = Colors.#validateChannelValue(channelFrom);
		channelTo = Colors.#validateChannelValue(channelTo);
		return channelFrom < channelTo
			? channelFrom + Math.round(Math.floor((channelTo - channelFrom) * percent))
			: channelFrom - Math.round(Math.floor((channelFrom - channelTo) * percent));
	}
	static #dec2hex(dec) {
		return dec.toString(16).padStart(2, "0");
	}
	static #hex2dec(hex) {
		return parseInt(hex, 16);
	}
  static #validateChannelValue(val) {
    return Math.max(Math.min(val, 255), 0);
  }
}

export default ColorHelper;
