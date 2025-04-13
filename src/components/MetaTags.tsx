import { Helmet } from 'react-helmet';

const MetaTags = () => {
	return (
		<Helmet>
			<meta
				name='description'
				content='Theophilus Nkwuda - A versatile Full Stack Developer with expertise in web development, mobile app development, and modern software solutions. Specializing in React, Node.js, and cross-platform development to create innovative digital experiences.'
			/>
			<meta
				name='keywords'
				content='full stack developer, web developer, mobile app developer, React developer, Node.js developer, software engineer, TypeScript, Next.js, MongoDB, AWS, Docker, Lagos, Nigeria, portfolio'
			/>
			<link
				rel='canonical'
				href='https://theophilusnk.dev'
			/>
			<meta
				property='og:title'
				content='Theophilus Nkwuda | Full Stack & Mobile Developer'
			/>
			<meta
				property='og:description'
				content='Full Stack Developer specializing in web and mobile app development. Expert in React, Node.js, and modern software solutions. Creating innovative digital experiences.'
			/>
			<meta
				property='og:url'
				content='https://theophilusnk.dev'
			/>
			<meta
				property='og:image'
				content='https://theophilusnk.dev/nkwudatheophilus.png'
			/>
			<meta
				property='og:type'
				content='website'
			/>
			<meta
				name='twitter:card'
				content='summary_large_image'
			/>
			<meta
				name='twitter:title'
				content='Theophilus Nkwuda | Full Stack & Mobile Developer'
			/>
			<meta
				name='twitter:description'
				content='Full Stack Developer specializing in web and mobile app development. Expert in React, Node.js, and modern software solutions. Creating innovative digital experiences.'
			/>
			<meta
				name='twitter:image'
				content='https://theophilusnk.dev/nkwudatheophilus.png'
			/>
			<script type='application/ld+json'>{`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Theophilus Nkwuda",
    "url": "https://theophilusnk.dev",
      "image": "https://theophilusnk.dev/nkwudatheophilus.png",
      "description": "Full Stack Developer specializing in web and mobile app development. Expert in React, Node.js, and modern software solutions.",
      "jobTitle": "Full Stack Developer",
      "knowsAbout": ["Web Development", "Mobile App Development", "React", "Node.js", "TypeScript", "Next.js", "MongoDB", "AWS", "Docker"],
      "sameAs": [
        "https://www.facebook.com/tiocode",
        "https://x.com/tiocode_",
        "https://www.instagram.com/tioc0de",
        "https://www.linkedin.com/in/ontiojs1",
        "https://github.com/ONtio-js"
      ]
    }
    `}</script>
		</Helmet>
	);
};

export default MetaTags;
