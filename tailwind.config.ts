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
				'inter': ['Inter', 'system-ui', 'sans-serif'],
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
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-warm': 'var(--gradient-warm)',
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'medium': 'var(--shadow-medium)',
				'large': 'var(--shadow-large)',
				'glow': 'var(--shadow-glow)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			transitionDuration: {
				'800': '800ms',
				'1400': '1400ms'
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
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)',
					},
					'50%': {
						transform: 'translateY(-20px)',
					}
				},
				'letter-shine': {
					'0%': {
						'text-shadow': '0 0 0 transparent'
					},
					'10%': {
						'text-shadow': '0 0 10px rgba(59, 130, 246, 0.8), 0 0 20px rgba(147, 51, 234, 0.6), 0 0 30px rgba(34, 197, 94, 0.4)'
					},
					'20%': {
						'text-shadow': '0 0 0 transparent'
					},
					'100%': {
						'text-shadow': '0 0 0 transparent'
					}
				},
				'dynamic-island-pop': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.8) translateY(15px)'
					},
					'60%': {
						opacity: '0.9',
						transform: 'scale(1.02) translateY(-2px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) translateY(0)'
					}
				},
				'dynamic-island-scale': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.6)',
						borderRadius: '32px'
					},
					'70%': {
						opacity: '0.95',
						transform: 'scale(1.03)',
						borderRadius: '26px'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
						borderRadius: '24px'
					}
				},
				'smooth-fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(12px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'gentle-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 0 8px rgba(59, 130, 246, 0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'flash': {
					'0%': { 
						backgroundColor: 'hsl(var(--primary))'
					},
					'50%': { 
						backgroundColor: 'hsl(var(--destructive))'
					},
					'100%': { 
						backgroundColor: 'hsl(var(--primary))'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s ease-out forwards',
				'float': 'float 6s ease-in-out infinite',
				'letter-shine': 'letter-shine 8s ease-in-out infinite',
				'dynamic-island-pop': 'dynamic-island-pop 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards',
				'dynamic-island-scale': 'dynamic-island-scale 1s cubic-bezier(0.25, 0.8, 0.25, 1) forwards',
				'pulse-slow': 'gentle-pulse 4s ease-in-out infinite',
				'smooth-fade-in': 'smooth-fade-in 0.6s ease-out forwards',
				'slide-up': 'slide-up 0.6s ease-out forwards',
				'flash': 'flash 1s ease-in-out infinite alternate'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;