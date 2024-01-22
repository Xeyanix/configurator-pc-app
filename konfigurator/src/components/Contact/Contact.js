import React from 'react';
import styles from "./Contact.module.scss";

function Contact() {
    return (
        <div id="contactSection" className={styles.contactSection}>
            <div >
                <h2
                    className="wp-block-heading has-background"
                    style={{
                        backgroundColor: '#b0786a',
                        marginBottom: 'var(--wp--preset--spacing--40)',
                        textTransform: 'uppercase',
                    }}
                >
                    Zapraszam do kontaktu
                </h2>
                <p
                    style={{
                        marginTop: 'var(--wp--preset--spacing--30)',
                        marginBottom: 'var(--wp--preset--spacing--20)',
                        fontSize: 'clamp(0.875rem, 0.875rem + ((1vw - 0.2rem) * 0.531), 1.3rem)',
                        textTransform: 'uppercase',
                    }}
                >
                    <strong>Social media</strong>
                </p>

                <ul class="wp-block-social-links has-visible-labels has-icon-color is-style-logos-only is-horizontal is-layout-flex wp-container-core-social-links-layout-1 wp-block-social-links-is-layout-flex">
                    <li
                        class="wp-social-link wp-social-link-instagram has-contrast-color wp-block-social-link"
                        data-darkreader-inline-color="">
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            // href="https://www.instagram.com/bboyjohnny/"
                            href="https://www.linkedin.com/in/jan-goralewski/"
                            class="wp-block-social-link-anchor">
                            
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24" version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                focusable="false">
                                <path
                                    d="M12,4.622c2.403,0,2.688,0.009,3.637,0.052c0.877,0.04,1.354,0.187,1.671,0.31c0.42,0.163,0.72,0.358,1.035,0.673 c0.315,0.315,0.51,0.615,0.673,1.035c0.123,0.317,0.27,0.794,0.31,1.671c0.043,0.949,0.052,1.234,0.052,3.637 s-0.009,2.688-0.052,3.637c-0.04,0.877-0.187,1.354-0.31,1.671c-0.163,0.42-0.358,0.72-0.673,1.035 c-0.315,0.315-0.615,0.51-1.035,0.673c-0.317,0.123-0.794,0.27-1.671,0.31c-0.949,0.043-1.233,0.052-3.637,0.052 s-2.688-0.009-3.637-0.052c-0.877-0.04-1.354-0.187-1.671-0.31c-0.42-0.163-0.72-0.358-1.035-0.673 c-0.315-0.315-0.51-0.615-0.673-1.035c-0.123-0.317-0.27-0.794-0.31-1.671C4.631,14.688,4.622,14.403,4.622,12 s0.009-2.688,0.052-3.637c0.04-0.877,0.187-1.354,0.31-1.671c0.163-0.42,0.358-0.72,0.673-1.035 c0.315-0.315,0.615-0.51,1.035-0.673c0.317-0.123,0.794-0.27,1.671-0.31C9.312,4.631,9.597,4.622,12,4.622 M12,3 C9.556,3,9.249,3.01,8.289,3.054C7.331,3.098,6.677,3.25,6.105,3.472C5.513,3.702,5.011,4.01,4.511,4.511 c-0.5,0.5-0.808,1.002-1.038,1.594C3.25,6.677,3.098,7.331,3.054,8.289C3.01,9.249,3,9.556,3,12c0,2.444,0.01,2.751,0.054,3.711 c0.044,0.958,0.196,1.612,0.418,2.185c0.23,0.592,0.538,1.094,1.038,1.594c0.5,0.5,1.002,0.808,1.594,1.038 c0.572,0.222,1.227,0.375,2.185,0.418C9.249,20.99,9.556,21,12,21s2.751-0.01,3.711-0.054c0.958-0.044,1.612-0.196,2.185-0.418 c0.592-0.23,1.094-0.538,1.594-1.038c0.5-0.5,0.808-1.002,1.038-1.594c0.222-0.572,0.375-1.227,0.418-2.185 C20.99,14.751,21,14.444,21,12s-0.01-2.751-0.054-3.711c-0.044-0.958-0.196-1.612-0.418-2.185c-0.23-0.592-0.538-1.094-1.038-1.594 c-0.5-0.5-1.002-0.808-1.594-1.038c-0.572-0.222-1.227-0.375-2.185-0.418C14.751,3.01,14.444,3,12,3L12,3z M12,7.378 c-2.552,0-4.622,2.069-4.622,4.622S9.448,16.622,12,16.622s4.622-2.069,4.622-4.622S14.552,7.378,12,7.378z M12,15 c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S13.657,15,12,15z M16.804,6.116c-0.596,0-1.08,0.484-1.08,1.08 s0.484,1.08,1.08,1.08c0.596,0,1.08-0.484,1.08-1.08S17.401,6.116,16.804,6.116z">
                                </path>
                            </svg>
                            <span class="wp-block-social-link-label">Janek Góralewski</span>
                        </a>
                    </li>
                </ul>

            </div>
        </div >
    );
}

export default Contact;









