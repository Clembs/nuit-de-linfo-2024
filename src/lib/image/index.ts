type Image = {
	src: string;
	alt: string;
}

export type PopupContents = {
	graphic: Image;
	images: Image[];
	title: string;
	text: string;
};
