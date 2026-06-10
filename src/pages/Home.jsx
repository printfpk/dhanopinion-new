import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Suspense, useRef, useState, useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
	HoverFlip,
	RevealChar,
	ScrollFillText,
	ScrollCharRevealText,
} from "../components/Animations";
import { SpreadCards } from "../components/SpreadCards";
import ParticleSphere from "../components/ParticleSphere";

const AnimatedParagraph = ({ text, style, delay = 0.5 }) => {
	const pRef = useRef(null);
	useGSAP(() => {
		if (!pRef.current) return;

		// Split into lines and words. Lines become the overflow mask.
		const split = new SplitType(pRef.current, { types: "lines, words" });

		// Make lines act as hidden overflow containers
		gsap.set(split.lines, { overflow: "hidden", verticalAlign: "top" });

		// Animate words inside each line together, staggered by line index
		split.lines.forEach((line, index) => {
			const words = line.querySelectorAll(".word");
			gsap.from(words, {
				y: "100%",
				opacity: 0,
				duration: 1.2,
				ease: "power3.out",
				delay: delay + index * 0.25,
			});
		});

		return () => {
			split.revert();
		};
	}, { scope: pRef });

	return (
		<p ref={pRef} style={style}>
			{text}
		</p>
	);
};

const fade = (d = 0) => ({
	initial: { opacity: 0, y: 40 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, amount: 0.2 },
	transition: { duration: 0.8, delay: d, ease: [0.16, 1, 0.3, 1] },
});
const fadeX = (x, d = 0) => ({
	initial: { opacity: 0, x },
	whileInView: { opacity: 1, x: 0 },
	viewport: { once: true, amount: 0.2 },
	transition: { duration: 0.8, delay: d, ease: [0.16, 1, 0.3, 1] },
});

const startingPoints = [
	{
		icon: "🏆",
		label: "Easy Wins",
		desc: "Quick actions with no downside to improve your investment outcomes immediately.",
		to: "/easy-wins",
	},
	{
		icon: "⚡",
		label: "Simple Investment Strategy",
		desc: "A straightforward approach to building a portfolio that works.",
		to: "/simple-investment-strategy",
	},
	{
		icon: "◆",
		label: "Investment Philosophy",
		desc: "Core principles behind every sound investment decision.",
		to: "/investment-philosophy",
	},
	{
		icon: "📈",
		label: "Steps to Success",
		desc: "Follow the key steps in our investing strategy, starting with the evaluation of debt.",
		to: "/steps-to-investing-success",
	},
];

export default function Home() {
	const [videoSrc, setVideoSrc] = useState(null);
	const [isVideoLoaded, setIsVideoLoaded] = useState(false);

	useEffect(() => {
		// Lazy load the heavy background video so it doesn't block initial page render
		const timer = setTimeout(() => {
			setVideoSrc("https://dhanopinion.com/wp-content/uploads/2023/09/Market-Loop-Background-Video-High-Resolution.mp4#t=1,20");
		}, 200);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<div style={{ position: "relative" }}>
				<section
					className="home-hero"
					style={{
						display: "flex",
						alignItems: "center",
						position: "relative",
						overflow: "hidden",
						paddingTop: "20px",
						paddingBottom: "120px",
						minHeight: "80vh",
						background: "var(--ed-bg-hero, var(--ed-bg))",
						transition: "background 0.3s ease"
					}}
				>
					{/* Ambient Glow Gradient */}
					<div className="hero-glow-gradient"></div>

					{/* Subtle Paper Grain */}
					<div className="paper-grain"></div>

					<div className="wrap" style={{ position: "relative", zIndex: 2, width: "100%", maxWidth: "1400px" }}>
						{/* ── ROW 1: Heading & Video ── */}
						<div
							style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "8vw",
								alignItems: "center",
								marginBottom: "10px"
							}}
						>
							{/* LEFT: Heading */}
							<motion.div
								initial="hidden"
								animate="visible"
								variants={{
									hidden: { opacity: 0 },
									visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
								}}
								className="home-row-1-left"
							>
								<h1
									style={{
										fontFamily: "var(--font-editorial)",
										fontSize: "clamp(80px, 10vw, 140px)",
										fontWeight: 400,
										lineHeight: 0.9,
										color: "var(--ed-text-main)",
										marginTop: 0,
										marginBottom: 0,
										letterSpacing: "-0.02em",
										fontStyle: "normal",
									}}
								>
									<motion.div
										variants={{
											hidden: { y: "40px", opacity: 0 },
											visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
										}}
									>
										Investing is
									</motion.div>
									<motion.div
										variants={{
											hidden: { y: "40px", opacity: 0 },
											visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
										}}
										style={{
											fontStyle: "italic",
											color: "var(--ed-accent-red)",
											marginLeft: "15%",
											marginTop: "10px"
										}}
									>
										Difficult.
									</motion.div>
								</h1>
							</motion.div>

							{/* RIGHT: Video */}
							<motion.div
								initial="hidden"
								animate="visible"
								variants={{
									hidden: { opacity: 0 },
									visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
								}}
								className="home-row-1-right"
								style={{ position: "relative" }}
							>
								<motion.div
									variants={{
										hidden: { opacity: 0, y: 20 },
										visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.6 } }
									}}
									style={{
										width: "100%",
										aspectRatio: "1.6/1",
										overflow: "hidden",
										borderRadius: "12px",
										boxShadow: "0 24px 48px rgba(0,0,0,0.08)",
										position: "relative",
									}}
								>
									{/* Skeleton Loader */}
									<div
										className="skeleton-box"
										style={{
											position: "absolute",
											inset: 0,
											zIndex: 1,
											opacity: isVideoLoaded ? 0 : 1,
											transition: "opacity 0.5s ease",
											pointerEvents: "none",
											borderRadius: "12px"
										}}
									>
										<div className="loading-spinner"></div>
									</div>

									<video
										autoPlay
										muted
										loop
										playsInline
										preload="none"
										onLoadedData={() => setIsVideoLoaded(true)}
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
											display: "block",
											opacity: isVideoLoaded ? 1 : 0,
											transition: "opacity 0.5s ease",
										}}
									>
										{videoSrc && <source src={videoSrc} type="video/mp4" />}
									</video>
									{/* Small circular shape at bottom-left corner acting as a cutout */}
									<div
										style={{
											position: "absolute",
											bottom: "-20px",
											left: "-20px",
											width: "60px",
											height: "60px",
											borderRadius: "50%",
											background: "#fcfcfc",
											zIndex: 2,
										}}
									/>
								</motion.div>
							</motion.div>
						</div>

						{/* ── ROW 2: Paragraphs ── */}
						<div
							style={{
								display: "flex",
								flexWrap: "wrap",
								gap: "8vw",
								alignItems: "flex-start",
							}}
						>
							{/* LEFT: Description */}
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={{
									hidden: { opacity: 0, y: 20 },
									visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } }
								}}
								className="home-row-2-left"
							>
								<p className="home-desc-text">
									It is difficult for large institutions, and it is even more difficult for individuals because they have less knowledge and resources. You can make it easier by evaluating our suggestions and if you are convinced, implement them.
								</p>
							</motion.div>

							{/* RIGHT: WE FOCUS ON */}
							<motion.div
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true }}
								variants={{
									hidden: { opacity: 0, y: 20 },
									visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.8 } }
								}}
								className="home-row-2-right"
							>
								<p style={{
									display: "inline-flex",
									alignItems: "center",
									textTransform: "uppercase",
									letterSpacing: "0.1em",
									fontSize: "12px",
									fontWeight: 600,
									color: "var(--ed-accent-gold)",
									marginBottom: "16px"
								}}>
									<div style={{ width: "8px", height: "8px", background: "var(--ed-accent-red)", borderRadius: "50%", marginRight: "12px" }}></div>
									WE FOCUS ON
								</p>
								<p className="home-focus-text">
									Simple investment strategies based on logic, reducing the clutter of options to a few good ones, saving you time and effort in implementation.
								</p>
							</motion.div>
						</div>

						{/* ── ROW 3: Starting Points ── */}
						<div style={{ width: "100%", height: "1px", background: "rgba(26, 25, 24, 0.08)", margin: "40px auto 24px" }}></div>

						<h2 style={{
							fontSize: "clamp(48px,5vw,72px)",
							lineHeight: 0.95,
							fontFamily: "var(--font-editorial)",
							color: "var(--ed-text-main)",
							fontWeight: 400,
							marginBottom: "32px",
							letterSpacing: "-0.02em"
						}}>
							Choose your <span style={{ fontStyle: "italic", color: "var(--ed-accent-red)" }}>starting point</span>
						</h2>

						<motion.div
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
							style={{
								display: "flex",
								gap: "24px",
								flexWrap: "wrap",
								width: "100%",
								marginBottom: "40px"
							}}
						>
							{startingPoints.map((item, i) => (
								<motion.div
									key={i}
									animate={{ y: [0, -10, 0] }}
									transition={{
										duration: 4,
										ease: "easeInOut",
										repeat: Infinity,
										delay: i * 0.4
									}}
									style={{ flex: "1 1 240px", display: "flex" }}
								>
									<Link
										to={item.to}
										className="starting-card"
										style={{
											flex: 1,
											padding: "32px",
											background: "var(--ed-card-bg)",
											border: "1px solid var(--ed-border)",
											borderRadius: "12px",
											textDecoration: "none",
											display: "flex",
											flexDirection: "column",
											gap: "16px",
											transition: "background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
											boxShadow: "0 8px 24px rgba(0,0,0,.04)",
											position: "relative"
										}}
									>
										<div style={{ fontSize: "28px" }}>{item.icon}</div>
										<div style={{ flex: 1 }}>
											<h3 style={{
												fontFamily: "var(--font-editorial)",
												fontSize: "24px",
												color: "var(--ed-text-main)",
												fontWeight: 600,
												margin: "0 0 8px 0",
												lineHeight: 1.2,
												transition: "color 0.3s ease"
											}}>
												{item.label}
											</h3>
											<p style={{
												fontFamily: "'Inter', sans-serif",
												fontSize: "14px",
												color: "var(--ed-text-sub)",
												lineHeight: 1.6,
												margin: 0,
												fontWeight: 400,
												transition: "color 0.3s ease"
											}}>
												{item.desc}
											</p>
										</div>
										<div className="starting-card-explore" style={{
											display: "flex",
											alignItems: "center",
											gap: "6px",
											fontFamily: "'Inter', sans-serif",
											fontSize: "12px",
											fontWeight: 600,
											color: "var(--ed-accent-red)",
											marginTop: "8px",
											textTransform: "uppercase",
											letterSpacing: "0.05em",
										}}>
											Explore Page <span className="starting-card-arrow" style={{ transition: "transform 0.3s ease" }}>→</span>
										</div>
									</Link>
								</motion.div>
							))}
						</motion.div>
					</div>
				</section>
			</div>


			{/* ══════ SCOPE ══════ */}
			<section
				className="sec"
				style={{
					background: "var(--ed-sec-scope)",
					padding: "80px 40px",
					transition: "background 0.3s ease"
				}}
			>
				<div className="wrap tc" style={{ maxWidth: "900px", margin: "0 auto" }}>
					<div style={{ width: "100%", height: "1px", background: "rgba(26, 25, 24, 0.08)", margin: "0 auto 40px" }}></div>

					<p style={{
						display: "inline-flex",
						alignItems: "center",
						textTransform: "uppercase",
						letterSpacing: "0.1em",
						fontSize: "13px",
						fontWeight: 600,
						color: "var(--ed-accent-gold)",
						marginBottom: "24px"
					}}>
						<div style={{ width: "8px", height: "8px", background: "var(--ed-accent-red)", borderRadius: "50%", marginRight: "12px" }}></div>
						PARAMETERS
					</p>
					<RevealChar
						as="h2"
						text="Scope"
						style={{
							fontFamily: "var(--font-editorial)",
							fontSize: "clamp(32px, 5vw, 48px)",
							fontWeight: 500,
							color: "var(--ed-text-main)",
							marginBottom: "40px",
							justifyContent: "center",
							fontStyle: "italic"
						}}
						delay={0.1}
					/>

					<div style={{ width: "60px", height: "1px", background: "var(--ed-accent-gold)", margin: "0 auto 32px" }}></div>

					<motion.p
						{...fade(0.3)}
						style={{
							fontFamily: "'Inter', sans-serif",
							fontSize: "18px",
							lineHeight: 1.7,
							color: "var(--ed-text-sub)",
							margin: "0 auto",
							transition: "color 0.3s ease"
						}}
					>
						The current scope covers financial assets such as mutual funds, government sponsored financial instruments and fixed deposits.
					</motion.p>
				</div>
			</section>

			{/* ══════ WHAT YOU CAN EXPECT (IMAGE 1 PRECISE) ══════ */}
			{/* ══════ WHAT YOU CAN EXPECT ══════ */}
			<section
				className="sec"
				style={{
					background: "var(--ed-sec-benefits)",
					padding: "160px 40px",
					transition: "background 0.3s ease"
				}}
			>
				<div className="wrap" style={{ maxWidth: "1400px" }}>
					<div style={{ width: "100%", height: "1px", background: "rgba(26, 25, 24, 0.08)", margin: "0 auto 80px" }}></div>

					<div style={{ textAlign: "center", marginBottom: "80px" }}>
						<p style={{
							display: "inline-flex",
							alignItems: "center",
							textTransform: "uppercase",
							letterSpacing: "0.1em",
							fontSize: "13px",
							fontWeight: 600,
							color: "var(--ed-accent-gold)",
							marginBottom: "24px"
						}}>
							<div style={{ width: "8px", height: "8px", background: "var(--ed-accent-red)", borderRadius: "50%", marginRight: "12px" }}></div>
							BENEFITS
						</p>
						<RevealChar
							as="h2"
							text="What you can expect"
							style={{
								fontFamily: "var(--font-editorial)",
								fontSize: "clamp(48px, 6vw, 72px)",
								fontWeight: 500,
								color: "var(--ed-text-main)",
								margin: 0,
								justifyContent: "center",
								letterSpacing: "-0.01em",
								fontStyle: "italic",
								lineHeight: 1.1
							}}
							delay={0.1}
						/>
					</div>

					<div style={{
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
						gap: "24px",
						width: "100%"
					}}>
						{[
							{ text: "A better match between your goals and your strategy." },
							{ text: "Reduced complexity in investment choices." },
							{ text: "Improved returns — a little." },
							{ text: "Reduced Risk — a little." },
							{ text: "Your 5th expectation here." },
							{ text: "Your 6th expectation here." },
						].map((b, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-50px" }}
								transition={{ duration: 0.6, delay: i * 0.1 }}
								style={{
									minHeight: "260px",
									background: "var(--ed-card-bg)",
									border: "1px solid var(--ed-border)",
									boxShadow: "0 8px 24px var(--ghost-border)",
									borderRadius: "12px",
									padding: "40px",
									display: "flex",
									flexDirection: "column",
									transition: "transform 0.3s ease"
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = "translateY(-4px)";
									e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,.05)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = "translateY(0)";
									e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,.03)";
								}}
							>
								{/* Top Left: Mark */}
								<div style={{
									fontSize: "18px",
									color: "var(--ed-accent-gold)",
								}}>
									✦
								</div>

								{/* Middle: The Text */}
								<div style={{
									flex: 1,
									display: "flex",
									alignItems: "center",
									marginTop: "20px"
								}}>
									<p style={{
										fontFamily: "var(--font-editorial)",
										fontSize: "clamp(24px, 2.5vw, 32px)",
										fontWeight: 400,
										lineHeight: 1.3,
										color: "var(--ed-text-main)",
										margin: 0,
										transition: "color 0.3s ease"
									}}>
										{b.text}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ══════ WHAT YOU SHOULD NOT EXPECT ══════ */}
			<section
				className="sec"
				style={{
					background: "var(--ed-sec-notexpect)",
					padding: "160px 40px",
					transition: "background 0.3s ease"
				}}
			>
				<div className="wrap" style={{ maxWidth: "1400px" }}>
					<div style={{ width: "100%", height: "1px", background: "rgba(26, 25, 24, 0.08)", margin: "0 auto 80px" }}></div>

					<div style={{ textAlign: "center", marginBottom: "80px" }}>
						<p style={{
							textTransform: "uppercase",
							letterSpacing: "0.1em",
							fontSize: "13px",
							fontWeight: 600,
							color: "var(--ed-accent-red)",
							marginBottom: "24px"
						}}>
							<span style={{ marginRight: "8px" }}>✕</span> REALISTIC EXPECTATIONS
						</p>
						<RevealChar
							as="h2"
							text="What you should not expect"
							style={{
								fontFamily: "var(--font-editorial)",
								fontSize: "clamp(48px, 6vw, 72px)",
								fontWeight: 500,
								color: "var(--ed-text-main)",
								margin: 0,
								justifyContent: "center",
								letterSpacing: "-0.01em",
								lineHeight: 1.1
							}}
							delay={0.1}
						/>
					</div>

					<div style={{
						display: "flex",
						gap: "24px",
						flexWrap: "wrap",
						justifyContent: "center",
						width: "100%"
					}}>
						{[
							{
								title: "Exponential Returns",
								desc: "Substantial improvement in returns"
							},
							{
								title: "Elimination of Risk",
								desc: "Elimination, or substantial reduction of the risk of loss."
							},
							{
								title: "Reduced Stress",
								desc: "Reduced stress in investing."
							}
						].map((item, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "-100px" }}
								transition={{ duration: 0.6, delay: i * 0.1 }}
								style={{
									flex: "1 1 300px",
									minHeight: "260px",
									background: "var(--ed-card-bg)",
									border: "1px solid var(--ed-border)",
									boxShadow: "0 8px 24px var(--ghost-border)",
									borderRadius: "12px",
									padding: "48px 40px",
									display: "flex",
									flexDirection: "column",
									transition: "transform 0.3s ease"
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = "translateY(-4px)";
									e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,.05)";
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = "translateY(0)";
									e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,.03)";
								}}
							>
								{/* Top Left: 'X' */}
								<div style={{
									fontSize: "20px",
									color: "var(--ed-accent-red)",
									alignSelf: "flex-start",
								}}>
									✕
								</div>

								{/* Middle: The Text */}
								<div style={{
									flex: 1,
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									marginTop: "24px",
									gap: "12px"
								}}>
									<h3 style={{
										fontFamily: "var(--font-editorial)",
										fontSize: "clamp(28px, 3vw, 36px)",
										fontWeight: 500,
										lineHeight: 1.2,
										color: "var(--ed-text-main)",
										margin: 0,
										transition: "color 0.3s ease"
									}}>
										{item.title}
									</h3>
									<p style={{
										fontFamily: "'Inter', sans-serif",
										fontSize: "16px",
										color: "var(--ed-text-sub)",
										margin: 0,
										lineHeight: 1.6,
										transition: "color 0.3s ease"
									}}>
										{item.desc}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ══════ WHO IS IT FOR ══════ */}
			<section
				className="sec"
				style={{
					background: "var(--ed-sec-audience)",
					padding: "160px 0",
					transition: "background 0.3s ease"
				}}
			>
				<div className="wrap" style={{ maxWidth: "1400px" }}>
					<div style={{ width: "100%", height: "1px", background: "var(--ed-divider)", margin: "0 auto 80px", transition: "background 0.3s ease" }}></div>

					<div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8rem" }}>
						{/* Left: Content */}
						<div style={{ flex: "1 1 500px" }}>
							<p style={{
								display: "inline-flex",
								alignItems: "center",
								textTransform: "uppercase",
								letterSpacing: "0.1em",
								fontSize: "13px",
								fontWeight: 600,
								color: "var(--ed-accent-gold)",
								marginBottom: "24px"
							}}>
								<div style={{ width: "8px", height: "8px", background: "var(--ed-accent-red)", borderRadius: "50%", marginRight: "12px" }}></div>
								TARGET AUDIENCE
							</p>
							<h2 style={{
								fontFamily: "var(--font-editorial)",
								fontSize: "clamp(48px, 6vw, 72px)",
								fontWeight: 400,
								color: "var(--ed-text-main)",
								marginBottom: "80px",
								letterSpacing: "-0.01em",
								transition: "color 0.3s ease",
								lineHeight: 1.1
							}}>
								Who is <span style={{ fontStyle: "italic", color: "var(--ed-accent-red)" }}>it for?</span>
							</h2>

							<div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
								<p style={{
									fontFamily: "'Inter', sans-serif",
									fontSize: "20px",
									color: "var(--ed-text-main)",
									lineHeight: 1.7,
									fontWeight: 400,
									margin: 0,
									maxWidth: 560,
									transition: "color 0.3s ease"
								}}>
									The resources on this website will be of help to anyone interested in investing. However, the primary focus of the content is individual investors who have limited time, resources and expertise to devote to investment research and analyses.
								</p>
								<p style={{
									fontFamily: "'Inter', sans-serif",
									fontSize: "16px",
									color: "var(--ed-text-sub)",
									lineHeight: 1.7,
									margin: 0,
									maxWidth: 560,
									transition: "color 0.3s ease"
								}}>
									Every individual can also get some simple guidance to have a pretty good solution without knowing or learning too much about this, but everyone should learn a little bit.
								</p>
							</div>
						</div>

						{/* Right: Elegant Image Frame */}
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.8 }}
							style={{ flex: "1 1 400px", position: "relative" }}
						>
							<div
								style={{
									position: "relative",
									zIndex: 1,
									background: "var(--ed-card-bg)",
									border: "1px solid var(--ed-border)",
									padding: "16px",
									boxShadow: "0 24px 48px rgba(0,0,0,0.05)"
								}}
							>
								<div
									style={{
										position: "relative",
										overflow: "hidden",
										aspectRatio: "3/4",
									}}
								>
									<img
										src="https://dhanopinion.com/wp-content/uploads/2023/09/pexels-ketut-subiyanto-4308025.jpg"
										alt="Target Audience"
										loading="lazy"
										style={{
											width: "100%",
											height: "100%",
											objectFit: "cover",
											display: "block",
											filter: "contrast(1.1) saturate(0.9)"
										}}
									/>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>



			{/* ══════ CTA — Waitlist ══════ */}
			<section
				className="sec"
				style={{
					background: "var(--ed-sec-cta)",
					padding: "160px 40px",
					transition: "background 0.3s ease"
				}}
			>
				<div className="wrap tc" style={{ maxWidth: "800px", margin: "0 auto" }}>
					<div style={{ width: "100%", height: "1px", background: "var(--ed-divider)", margin: "0 auto 80px", transition: "background 0.3s ease" }}></div>

					<p style={{
						display: "inline-flex",
						alignItems: "center",
						textTransform: "uppercase",
						letterSpacing: "0.1em",
						fontSize: "13px",
						fontWeight: 600,
						color: "var(--ed-accent-red)",
						marginBottom: "24px"
					}}>
						<div style={{ width: "8px", height: "8px", background: "var(--ed-accent-red)", borderRadius: "50%", marginRight: "12px" }}></div>
						1-ON-1 CONSULTING
					</p>
					<RevealChar
						as="h2"
						text="Join the Waitlist"
						style={{
							fontFamily: "var(--font-editorial)",
							fontSize: "clamp(48px, 6vw, 80px)",
							color: "var(--ed-text-main)",
							justifyContent: "center",
							letterSpacing: "-0.02em",
							fontWeight: 400,
							fontStyle: "italic",
							marginBottom: "80px"
						}}
						delay={0.1}
					/>
					<p
						style={{
							fontFamily: "'Inter', sans-serif",
							fontSize: "18px",
							lineHeight: 1.7,
							color: "var(--ed-text-sub)",
							marginBottom: "48px",
							maxWidth: "500px",
							margin: "0 auto 48px",
						}}
					>
						Due to high demand, our personal consulting is currently at capacity. Secure your spot in line today.
					</p>
					<motion.div {...fade(0.5)}>
						<a
							href="mailto:response@dhanopinion.com?subject=Join Consulting Waitlist"
							style={{
								display: "inline-block",
								border: "1px solid var(--ed-text-main)",
								color: "var(--ed-text-main)",
								textDecoration: "none",
								padding: "16px 40px",
								fontSize: "14px",
								textTransform: "uppercase",
								letterSpacing: "0.1em",
								fontWeight: 600,
								transition: "all 0.3s ease"
							}}
							onMouseEnter={(e) => {
								e.currentTarget.style.background = "var(--ed-text-main)";
								e.currentTarget.style.color = "var(--ed-bg)";
							}}
							onMouseLeave={(e) => {
								e.currentTarget.style.background = "transparent";
								e.currentTarget.style.color = "var(--ed-text-main)";
							}}
						>
							Get on the Waitlist
						</a>
					</motion.div>
				</div>
			</section>
		</>
	);
}
