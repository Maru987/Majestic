import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				cinema: {
					red: '#e50914',
					black: '#0a0a0a',
					darkgray: '#222222',
					gray: '#333333',
					dark: '#141414'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				'curtain-left': {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(-80%)'
					}
				},
				'curtain-right': {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(80%)'
					}
				},
				'curtain-close-left': {
					'0%': {
						transform: 'translateX(-80%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				'curtain-close-right': {
					'0%': {
						transform: 'translateX(80%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				'shimmer': {
					'0%': {
						transform: 'translateX(-100%) skewX(-45deg)'
					},
					'100%': {
						transform: 'translateX(200%) skewX(-45deg)'
					}
				},
				'bulb-flicker': {
					'0%, 100%': {
						opacity: '1'
					},
					'50%': {
						opacity: '0.7'
					}
				},
				'projector-flicker': {
					'0%, 100%': {
						opacity: '0.8',
						filter: 'blur(60px)'
					},
					'5%': {
						opacity: '0.6',
						filter: 'blur(65px)'
					},
					'10%': {
						opacity: '0.85',
						filter: 'blur(55px)'
					},
					'15%': {
						opacity: '0.9',
						filter: 'blur(58px)'
					},
					'25%': {
						opacity: '0.7',
						filter: 'blur(63px)'
					},
					'30%': {
						opacity: '0.75',
						filter: 'blur(60px)'
					},
					'35%': {
						opacity: '0.9',
						filter: 'blur(56px)'
					},
					'40%': {
						opacity: '0.75',
						filter: 'blur(62px)'
					},
					'45%': {
						opacity: '0.9',
						filter: 'blur(59px)'
					},
					'50%': {
						opacity: '0.8',
						filter: 'blur(60px)'
					},
					'55%': {
						opacity: '0.75',
						filter: 'blur(64px)'
					},
					'60%': {
						opacity: '0.95',
						filter: 'blur(58px)'
					},
					'70%': {
						opacity: '0.7',
						filter: 'blur(61px)'
					},
					'80%': {
						opacity: '0.85',
						filter: 'blur(59px)'
					},
					'90%': {
						opacity: '0.8',
						filter: 'blur(62px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 1s ease-out',
				'curtain-left': 'curtain-left 2.5s ease-in-out forwards',
				'curtain-right': 'curtain-right 2.5s ease-in-out forwards',
				'curtain-close-left': 'curtain-close-left 1.5s ease-in-out forwards',
				'curtain-close-right': 'curtain-close-right 1.5s ease-in-out forwards',
				'shimmer': 'shimmer 2s linear infinite',
				'bulb-flicker': 'bulb-flicker 2s ease-in-out infinite',
				'projector-flicker': 'projector-flicker 4s ease-in-out infinite'
			},
			transitionDuration: {
				'1500': '1500ms',
				'2000': '2000ms',
				'2500': '2500ms',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
