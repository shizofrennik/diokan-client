import React from 'react';
import { Link } from 'react-router';

class SignupInfo extends React.Component {
    render() {
        return (
            <div className="diokan-entry-page__inner-right">
                <div className="diokan-info__header">
                    <div className="diokan-title-primary">
                        You’ve got the eye. You want the clients.
                    </div>
                    <div className="diokan-title-primary_sub">
                        We can help.
                    </div>
                </div>
                <div className="diokan-info-list">
                    <div className="diokan-info-list__item">
                        <div className="diokan-info-list__item-icon">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <div className="diokan-info-list__item-description">
                            <p>With Diokan, there’s no marketing.</p>
                            <p>There’s no endless searching for clients.</p>
                        </div>
                    </div>
                    <div className="diokan-info-list__item">
                        <div className="diokan-info-list__item-icon">
                            <i className="fa fa-camera-retro" aria-hidden="true"></i>
                        </div>
                        <div className="diokan-info-list__item-description">
                            <p>You keep doing the same high-quality work that you’ve </p>
                            <p>always done and Diokan will handle everything else.</p>
                        </div>
                    </div>
                    <div className="diokan-info-list__item">
                        <div className="diokan-info-list__item-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="57" viewBox="0 0 101 93">
                                <g fill="#12A3E1" fillRule="evenodd">
                                    <path d="M92.697 42.085c-.156.481-.514 1.087-1.745.697-1.554-.514-2.24-1.339-2.04-2.506.203-1.039 1.123-2.206 2.367-3.046 1.338 1.569 1.788 3.716 1.418 4.855m-70.162 3.17a3.04 3.04 0 0 1-3.048-3.047c0-1.68 1.366-3.05 3.048-3.05a3.06 3.06 0 0 1 3.068 3.05 3.047 3.047 0 0 1-3.068 3.047m77.055-7.623c-.793-1.82-2.49-3.015-4.435-3.142-1.263-.092-2.506.235-3.625.764a6.77 6.77 0 0 0-2.164-1.183c-1.932-.637-6.164-.08-8.032 1.896-3.889-5.305-9.682-9.582-16.559-12.35a11.028 11.028 0 0 1-5.526 4.572c.45.374.702.637.733.67.574.668.498 1.68-.155 2.257-.31.263-.67.387-1.044.387-.45 0-.888-.188-1.215-.542-.076-.096-2.55-2.708-9.04-2.708-6.475 0-8.949 2.612-9.06 2.72-.59.641-1.586.7-2.24.127a1.593 1.593 0 0 1-.155-2.226c.14-.155 3.032-3.282 9.929-3.716a11.092 11.092 0 0 1-2.522-4.87c-4.53.219-8.869 1.027-12.87 2.365-3.876-5.026-14.115-9.646-19.422-10.769 0 10.984 4.825 13.442 4.637 19.372-4.048 3.763-7.004 8.276-8.514 13.254l-5.73-.84c-1.724-.251-2.86.948-2.517 2.66L2.35 57.748c.342 1.729 2.052 3.127 3.813 3.127h2.565c2.024 5.647 5.965 10.625 11.192 14.5v17.158c8.686 0 15.734.25 15.734-6.564v-3.393a49.684 49.684 0 0 0 11.33 1.326c5.12 0 10.01-.812 14.507-2.21v4.261c0 6.83 7.049 6.58 15.734 6.58V72.747c5.976-5.588 9.602-12.804 9.602-20.706 0-5.32-1.65-10.315-4.53-14.72 1.076-1.649 5.012-2.254 6.57-1.74.434.14.84.342 1.183.573-1.418 1.076-2.446 2.505-2.693 3.844-.187.932-.235 3.238 3.112 4.309.418.123.824.203 1.199.203 1.211 0 2.132-.685 2.538-1.928.526-1.62.012-4.154-1.494-6.101.76-.295 1.554-.45 2.347-.402 1.605.107 2.633 1.195 3.067 2.19.482 1.123.359 2.274-.326 3.115a.792.792 0 0 0 .107 1.119.794.794 0 0 0 1.12-.108c1.06-1.294 1.279-3.114.562-4.763"/>
                                    <path d="M63.265 17.814c0 4.385-3.565 7.95-7.952 7.95-4.39 0-7.937-3.565-7.937-7.95a7.936 7.936 0 0 1 7.937-7.933c4.387 0 7.952 3.56 7.952 7.933M50.13 5.942a5.93 5.93 0 0 1-5.945 5.93 5.93 5.93 0 0 1-5.944-5.93A5.943 5.943 0 0 1 44.185 0a5.943 5.943 0 0 1 5.944 5.942M70.843 9.32a4.155 4.155 0 0 1-4.155 4.153c-2.287 0-4.14-1.868-4.14-4.154a4.138 4.138 0 0 1 4.14-4.138 4.141 4.141 0 0 1 4.155 4.138"/>
                                </g>
                            </svg>
                        </div>
                        <div className="diokan-info-list__item-description">
                            <p>Pull the money to your bank account to use as a</p>
                            <p>secondary income stream or save for that new lens.</p>
                        </div>
                    </div>
                </div>
                <div className="diokan-helper">
                    <div className="diokan-helper-message">
                        Are you a customer, looking for your photos?
                    </div>
                    <Link to="/users/signup" className="diokan-link">
                        Sign up to view your photos
                    </Link>
                </div>
            </div>
        );
    }
}

export default SignupInfo;