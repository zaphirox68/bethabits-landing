// content/legal.ts
export const IMPRESSUM = `
Impressum (Austria)

Bet Habits — sole proprietorship
Mariahilfer Straße 62 / 37
1070 Vienna, Austria

E-Mail: bethabitsoffice@gmail.com
UID/FN (falls vorhanden): —
`;

export const TERMS_OF_SERVICE = `
Bet Habits Terms of Service  
Effective 18 April 2025  |  Last revised 4 May 2025

1. Agreement  
By creating an account or using the Bet Habits mobile application ("Service") you form a binding contract with the sole proprietor trading as "Bet Habits" ("we", "us"). If you do not agree to these Terms, do not use the Service.

2. Eligibility  
You must be **18 years or older** and legally capable of entering contracts in your country of residence.

3. How the Service works  
You set a measurable, time-boxed goal and choose **one** verifier:  
• **AI verifier** (automated model), or  
• **Peer verifier** (one friend you invite).  
If the goal is **verified as achieved**, no money is charged.  
If the goal **fails verification**, the stake you selected is charged to your payment method and retained by us as an administrative fee. No funds are reserved, blocked, or pre-authorised before failure.

4. Verification & Appeals  
The verifier's decision is final unless you file an appeal within 48 hours via Settings → **Contact Us**. Appeals are reviewed manually and our ruling is binding.

5. Your Obligations  
• Set clear, specific goals.  
• Upload only content you have the right to share.  
• Avoid illegal, harmful, or privacy-invasive content.  
• Accept the verdict of the chosen verifier unless appealed.

6. Financial Terms  
• **Stake limits:** USD 5 minimum, USD 10 000 maximum per goal.  
• **Payment capture:** Card details are tokenised by Stripe at goal creation; the stake is captured **only** if the goal fails verification.  
• **No partial refunds** once a goal is marked as failed.  
• **Cancellation:** You may cancel a goal in Dashboard → Goal details → Cancel *before* its start time; cancellation is impossible after the deadline begins.  
• **Taxes:** While Bet Habits remains below the Austrian small-business threshold (€35 000) and the EU micro-business threshold (€10 000 cross-border digital services), **no VAT is charged**. If these limits are exceeded, VAT or sales tax will be added where legally required (see § 11).

7. Account Suspension  
We may suspend or terminate your account—and collect any outstanding stakes—if we detect fraud, abuse, or breach of these Terms.

8. Intellectual Property  
The Service's code, design, and trademarks are ours. You keep ownership of content you upload but grant us a non-exclusive, worldwide licence to store, display, and process it solely for verification.

9. Disclaimer  
The Service provides no medical, psychological, or financial advice and is offered "as is". Use it at your own risk.

10. Limitation of Liability  
Our total liability is limited to the greater of (i) USD 100 or (ii) the stakes you forfeited in the 12 months preceding the claim. We are not liable for indirect or consequential damages.

11. Taxes  
If Bet Habits exceeds (i) the Austrian small-business exemption (€35 000 total turnover), (ii) the EU digital-services micro-threshold (€10 000 cross-border B2C), or (iii) a U.S. state's economic-nexus threshold (e.g. USD 100 000 sales or 200 transactions), forfeited stakes will be treated as consideration for a digital service and local VAT or sales tax will be collected via the EU One-Stop Shop or Stripe Tax. 

12. Governing Law & Disputes  
These Terms are governed by Austrian law. Exclusive venue is Vienna, except where consumer-protection rules grant you the right to sue in your home jurisdiction. U.S. users may bring claims in small-claims court or choose binding arbitration under the AAA Consumer Rules.

13. Changes  
Material changes to these Terms will appear in-app at least 14 days before they take effect. Continued use after that date constitutes acceptance of the revised Terms.

14. Contact  
bethabitsoffice@gmail.com  
Mariahilfer Straße 62 / 37, 1070 Vienna, Austria
`;

export const PRIVACY_POLICY = `
Bet Habits Privacy Policy  
Effective 18 April 2025  |  Last revised 4 May 2025

1. Who we are  
"Bet Habits" (sole proprietorship) acts as the **data controller** for all personal data collected through the Bet Habits mobile app and bethabits.com.  
Address: Mariahilfer Straße 62 / 37, 1070 Vienna, Austria  
E-mail: bethabitsoffice@gmail.com  

2. What we collect and why

Account data
* Email, name, optional profile photo
* Used to create and secure your account
* Lawful basis: Contract (Art. 6 (1)(b) GDPR)

Goal data
* Goal description, stake amount, verifier choice, deadlines
* Powers the core service
* Lawful basis: Contract

Proof content
* Photos, files, GPS metadata, timestamps
* Enables goal-completion verification
* Lawful basis: Contract

Payment data
* Card token, payout bank details (handled by Stripe)
* Holds the stake and processes payouts
* Lawful basis: Contract

Usage analytics (opt-in)
* Device ID, feature taps
* Helps improve the product
* Lawful basis: Consent

Crash logs
* Error traces
* Aid debugging and security hardening
* Lawful basis: Legitimate interest (Art. 6 (1)(f))

3. Who gets access
* **Verifiers you choose** (either the AI model or the individual friends you select) see the proof attached to *their* goals only.  
* **OpenAI, LLC** — receives goal text and proof solely when you pick AI verification.  
* **Stripe Payments Europe, Ltd.** — card vaulting and stake payouts.  
* **Google Cloud / Firebase** — Google Cloud data centres, encrypted at rest.  
* **Google Sign-In** (Android only) — provides authentication and profile data for account creation.  
* No data is sold or shared with advertisers. Google Analytics and Google Ads are disabled.

4. Google Services Integration

**Google Services Used:**
* **Google Sign-In** (Android only) — for user authentication
* **Firebase Authentication** — integrated with Google Sign-In
* **Firebase Firestore** — database storage for user data and app content
* **Firebase Storage** — file storage for proof submissions
* **Firebase Cloud Functions** — server-side processing
* **Firebase Cloud Messaging** — push notifications
* **Google Play Services** — required for Google Sign-In functionality

**Google User Data Accessed:**
When you sign in with Google (Android only), we access:
* **Email address** — for account creation and identification
* **Profile information** — name and profile photo for your account
* **Authentication tokens** — ID token and access token for Firebase authentication

**How We Use Google Data:**
* **Authentication** — Google credentials authenticate you with Firebase
* **Account creation** — Email and profile photo stored in Firestore for new users
* **User identification** — Google user ID used as primary identifier
* **Profile management** — Google profile photo can be used as your profile picture

**Third-Party Sharing:**
* **No direct sharing** — Google data is not shared with third parties beyond Firebase/Google Cloud infrastructure
* **Firebase processing** — Data is processed through Google's Firebase services (Google's own infrastructure)
* **No advertising** — Google Analytics and Google Ads are explicitly disabled

**Security Measures:**
* **Firebase Security Rules** — Data access controlled through Firebase security rules
* **Encryption** — All data encrypted at rest and in transit through Firebase
* **Data Centers** — Firebase services use Google Cloud data centers (primarily US-based for this project)
* **Token-based authentication** — Secure ID tokens used for authentication

**Retention Policies:**
* **Same as general retention** — Google data follows same retention policies as other user data
* **Account deletion** — All associated Google data removed from Firestore when accounts are deleted
* **Token management** — Google tokens managed by Firebase and automatically refreshed

5. International transfers  
Processors located outside the EEA rely on the EU–US Data Privacy Framework and the latest EU Standard Contractual Clauses.

6. Retention
* Proof files: kept 30 days after a goal is verified or fails, then erased  
* Goal and payout records: kept 7 years for bookkeeping compliance  
* Analytics events: kept 12 months, then aggregated and anonymised  
* Deleted accounts: fully wiped within 30 days, except payout ledgers (retained 7 years)

7. Your rights
EU/UK residents: access, rectification, erasure, restriction, portability, objection, and lodge a complaint with the Austrian Data Protection Authority.  
California residents: know, delete, correct, and opt-out of "sharing" (we do not sell).  
Submit any request via **Contact Us** in the app or e-mail bethabitsoffice@gmail.com. We answer within 30 days.

8. Security  
All traffic runs over HTTPS / TLS 1.2+. Files are AES-256 encrypted at rest. Role-based rules restrict staff access.

9. Age limit  
The service is intended for **adults 18 years and older**. We do not knowingly collect data from anyone under 18. If you believe a minor has signed up, contact us for deletion.

10. Automated decisions  
When AI verification is selected, the model returns a pass/fail result that may automatically forfeit your stake. You may request a human review within 48 h via the goal detail screen.

11. Changes  
Material changes are announced in-app at least 14 days before they take effect. Continued use after that date constitutes acceptance of the amended policy.

12. Account deletion  
You can delete your Bet Habits account directly in the app under Settings → Delete Account.  
Account deletion is only available when you have no active goals (to ensure all open bets and payments are fully settled).  
Once deletion is confirmed, all personal data — including goals, proof files, and connected Stripe data — is permanently removed from our servers (Firestore / Storage).  
For assistance, contact bethabitsoffice@gmail.com.

Contact: bethabitsoffice@gmail.com
`;
