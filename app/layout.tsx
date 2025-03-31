import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, IBM_Plex_Sans } from "next/font/google"
import "../global.css"

// Настройка шрифтов с использованием next/font
const playfairDisplay = Playfair_Display({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "600"],
	variable: "--font-playfair-display",
})

const ibmPlexSans = IBM_Plex_Sans({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "500", "600"],
	variable: "--font-ibm-plex-sans",
})

export const metadata: Metadata = {
	title: "Школа Астрологии",
	description: "Школа Астрологии Оксаны Юрловой",
	generator: 'v0.dev'
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ru" className={`${playfairDisplay.variable} ${ibmPlexSans.variable}`}>
			<body>{children}</body>
		</html>
	)
}



import './globals.css'