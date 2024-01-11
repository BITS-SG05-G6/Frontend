import react from "react"
import Text from "../../components/common/Text"
export function TAP()  {
    return(
        // <div className="container pt-12 pb-24">
        //     <div className="w-auto mx-auto">
        //         <h1>Privacy Policy</h1>
        //         <p>
        //         This Privacy Policy governs the manner in which Money Lover collects, uses, maintains and discloses information collected from users (each, a "User") of the <a href="">webiste</a> website ("Site"). This privacy policy applies to the Site and all products and services offered by WiseWallet.
        //         </p>
        //         <h2>
            //         Personal identification information
        //         </h2>
        //         <p>
        //         We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, subscribe to the newsletter, respond to a survey, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.
        //         </p>
        //         <h2>
        //         Web browser cookies
        //         </h2>
        //         <p>
        //         Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
        //         </p>
        //         <h2>
        //         How we protect your information
        //         </h2>
        //         <p>We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site. Sensitive and private data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted and protected with digital signatures.
        //         </p>
        //         <h2>
        //         Contacting us
        //         </h2>
        //         <p2>
        //         If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: contact@wisewallet.com
        //         </p2>
        //     </div>
        // </div>
        <div className="relative -mt-[5.75rem] overflow-hidden pt-[5.75rem]">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24">
                    <h1 className="text-4xl text-[#EF5DA8] font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                        Privacy Policy
                    </h1>
                </div>
            </div>
            <div className="relative px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-[40rem] prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600">
                    <p className="text-wrap">
                    This Privacy Policy governs the manner in which Money Lover collects, uses, maintains and discloses information collected from users (each, a "User") of the <a href="">webiste</a> website ("Site"). This privacy policy applies to the Site and all products and services offered by WiseWallet.
                    </p>
                    <h2 className="text-2xl text-[#EF5DA8]  text-start m-4 font-extrabold tracking-tight text-slate-900">
                    Collection of personal information
                    </h2>
                    <p className="text-wrap text-start m-4 ">We receive and store any information you knowingly provide to us when you make a purchase through the Website. Currently this is limited to your email address, which is required for you to be able to login to the Website and access any purchased Tailwind UI products.</p>
                    <h2 className="text-2xl text-start m-4 font-extrabold tracking-tight text-slate-900 text-[#EF5DA8] ">
                    Personal identification information
                    </h2>
                    <p className="text-wrap text-start m-4 ">
                    We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, subscribe to the newsletter, respond to a survey, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.
                    </p>
                    <h2 className="text-start m-4 text-2xl font-extrabold tracking-tight text-slate-900 text-[#EF5DA8] ">
                    Web browser cookies
                    </h2>
                    <p className="text-wrap text-start m-4 ">
                    Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.
                    </p>
                    <h2 className="text-2xl text-start m-4 font-extrabold tracking-tight text-slate-900 text-[#EF5DA8] ">
                    How we protect your information
                    </h2>
                    <p className="text-wrap text-start m-4 ">
                    We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site. Sensitive and private data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted and protected with digital signatures.
                    </p>
                    <h2 className="text-2xl text-start m-4 font-extrabold tracking-tight text-slate-900 text-[#EF5DA8] ">
                    Contact Us
                    </h2>
                    <p className="text-wrap text-start m-4 ">
                    If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: contact@wisewallet.com
                    </p>

                </div>

            </div>
        </div>
    )
}