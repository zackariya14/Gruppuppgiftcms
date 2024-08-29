import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
export default function Hero({ blok }) {
	return (
		<section {...storyblokEditable(blok)} className="w-full flex flex-col items-center my-10 gap-5">
			<h1 className="text-4xl">{blok.title}</h1>
			<p>{blok.body}</p>
			<Image src={blok.image.filename} alt={blok.image.alt} width={500} height={500} />
		</section>
	)
}