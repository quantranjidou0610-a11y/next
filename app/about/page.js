import Link  from "next/link"

export const metadata={
    title:'About | ともすた'
}

export default function Page() {
    return (
        <>
        <h1>About</h1>
        <p><Link href="/">トップページに戻る</Link></p>
        </>
    )
}