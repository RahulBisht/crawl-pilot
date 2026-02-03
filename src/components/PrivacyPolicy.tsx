import React from 'react'

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="pp-container">
            <h1 className="pp-title">Privacy Policy for StreamFlix</h1>
            <p className="pp-text"><strong>Last Updated: February 03, 2026</strong></p>

            <p className="pp-text">
                CrawlPilot ("we," "us," or "our") operates the StreamFlix mobile application (the "App"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our App and the choices you have associated with that data.
            </p>

            <p className="pp-text">
                We use your data to provide and improve the App. By using the App, you agree to the collection and use of information in accordance with this policy.
            </p>

            <div className="pp-section">
                <h2 className="pp-h2">1. Information Collection and Use</h2>
                <p className="pp-text">
                    We collect several different types of information for various purposes to provide and improve our service to you.
                </p>

                <h3 className="pp-h3">Types of Data Collected</h3>

                <h3 className="pp-h3">Personal Data</h3>
                <p className="pp-text">
                    While using our App, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
                </p>
                <ul className="pp-list">
                    <li>Email address (for account synchronization if applicable)</li>
                    <li>Cookies and Usage Data</li>
                </ul>

                <h3 className="pp-h3">Usage Data</h3>
                <p className="pp-text">
                    When you access the App by or through a mobile device, we may collect certain information automatically, including, but not limited to:
                </p>
                <ul className="pp-list">
                    <li>The type of mobile device you use</li>
                    <li>Your mobile device unique ID</li>
                    <li>The IP address of your mobile device</li>
                    <li>Your mobile operating system</li>
                    <li>The type of mobile Internet browser you use</li>
                    <li>Unique device identifiers and other diagnostic data</li>
                </ul>
            </div>

            <div className="pp-section">
                <h2 className="pp-h2">2. IPTV Content and Links</h2>
                <p className="pp-text">
                    StreamFlix is an IPTV Player. It does not provide, host, or own any media content. Users are responsible for providing their own content (e.g., M3U playlists). StreamFlix does not have any affiliation with third-party providers.
                </p>
                <ul className="pp-list">
                    <li><strong>Playlist Privacy</strong>: Any M3U links or playlist data you enter into the app are stored locally on your device or in your private secure storage. We do not transmit your playlist URLs to our servers.</li>
                </ul>
            </div>

            <div className="pp-section">
                <h2 className="pp-h2">3. Advertising and Third-Party Services</h2>
                <p className="pp-text">
                    We may use third-party Service Providers to monitor and analyze the use of our Service, or to show advertisements to you to help support and maintain our Service.
                </p>

                <h3 className="pp-h3">Google AdMob</h3>
                <p className="pp-text">
                    We use Google AdMob to display advertisements. Google's advertising requirements can be summed up by Google's Advertising Principles. They are put in place to provide a positive experience for users.
                </p>
                <ul className="pp-list">
                    <li>Google uses cookies to serve ads on our App. Google's use of the advertising identifier enables it and its partners to serve ads to our users based on their visit to our App or other apps on the Internet.</li>
                    <li>You may opt-out of personalized advertising by visiting Google Ads Settings.</li>
                </ul>
            </div>

            <div className="pp-section">
                <h2 className="pp-h2">4. Use of Data</h2>
                <p className="pp-text">StreamFlix uses the collected data for various purposes:</p>
                <ul className="pp-list">
                    <li>To provide and maintain the App</li>
                    <li>To notify you about changes to our App</li>
                    <li>To allow you to participate in interactive features of our App when you choose to do so</li>
                    <li>To provide customer care and support</li>
                    <li>To provide analysis or valuable information so that we can improve the App</li>
                    <li>To monitor the usage of the App</li>
                    <li>To detect, prevent and address technical issues</li>
                </ul>
            </div>

            <div className="pp-section">
                <h2 className="pp-h2">5. Security of Data</h2>
                <p className="pp-text">
                    The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
            </div>

            <div className="pp-section">
                <h2 className="pp-h2">6. Children's Privacy</h2>
                <p className="pp-text">Our Service does not address anyone under the age of 13 ("Children").</p>
                <p className="pp-text">
                    We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
                </p>
            </div>

            <div className="pp-section">
                <h2 className="pp-h2">7. Changes to This Privacy Policy</h2>
                <p className="pp-text">
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>
                <p className="pp-text">
                    You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
            </div>

            <div className="pp-section">
                <h2 className="pp-h2">8. Contact Us</h2>
                <p className="pp-text">If you have any questions about this Privacy Policy, please contact us:</p>
                <ul className="pp-list">
                    <li><strong>By email</strong>: crawlpilot6365@gmail.com</li>
                    <li><strong>Website</strong>: https://rahulbisht.github.io/crawl-pilot/</li>
                </ul>
            </div>
        </div>
    )
}

export default PrivacyPolicy
