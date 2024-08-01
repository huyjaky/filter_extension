import Request, { IType } from "~lib/Request";
import type Response from "~lib/Response";

import base64ToArrayBuffer from "../base64toArrayBuffer";
import loadImage from "../loadImage";
import Filter from "./Filter";
// import tuna from "data-base64:~assets/logo-itv.png"

export default class ImageFilter extends Filter {
	private t0: number;
	constructor() {
		super();
		this.t0 = performance.now();
	}

	public async analyze(target: Element) {
		if (target.nodeName !== "IMG") {
			return;
		}	
		const img = target as HTMLImageElement;
		
		// Tạo lớp che phủ (overlay) với hình ảnh của bạn
		const overlay = document.createElement("img");
		// overlay.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARwAAACxCAMAAAAh3/JWAAAAA1BMVEUbqPBsarW2AAAASElEQVR4nO3BMQEAAADCoPVPbQ0PoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIALA8UNAAFusnLHAAAAAElFTkSuQmCC"; // Đường dẫn đến hình ảnh lớp che phủ
		overlay.src = chrome.runtime.getURL("assets/image.jpg");
		overlay.style.position = "absolute";
		overlay.style.top = "0";
		overlay.style.left = "0";
		overlay.style.width = "100%";
		overlay.style.height = "100%";
		overlay.style.zIndex = "1"; // Đảm bảo lớp che phủ nằm trên hình ảnh
		overlay.style.pointerEvents = "none"; // Đảm bảo lớp che phủ không cản trở tương tác với hình ảnh
	
		// Đặt container để chứa hình ảnh và lớp che phủ
		const container = document.createElement("div");
		container.style.position = "relative";
		container.style.display = "inline-block";
		container.style.width = `${img.width}px`;
		container.style.height = `${img.height}px`;
	
		// Chèn container vào DOM và thêm hình ảnh cùng lớp che phủ vào container
		img.parentNode?.insertBefore(container, img);
		container.appendChild(img);
		container.appendChild(overlay);
	
	
		// Tải dữ liệu hình ảnh
		const imgData = await loadImage(img.src);
		const req = new Request(IType.IMAGE, imgData, {
			url: img.src
		});
	
		chrome.runtime.sendMessage(req, (res: Response) => {
			if (!res) {
				img.style.border = "10px solid gray";
				return;
			}
			const { result } = res;
			const t1 = performance.now();
			if (result) {
				// Nếu hình ảnh là nsfw, giữ lớp che phủ
				console.log({ img }, " is nsfw - ", t1 - this.t0 + " milliseconds.");
			} else {
				// Nếu hình ảnh là neutral, xóa lớp che phủ
				container.removeChild(overlay);
				console.log({ img }, " is neutral - ", t1 - this.t0 + " milliseconds.");
			}
		});
	}
	

	private analyzeImg(img: HTMLImageElement) {
		img.style.filter = "blur(25px)";
	}

	filter() {}
}
