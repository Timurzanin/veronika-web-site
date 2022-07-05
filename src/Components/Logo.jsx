import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'




const Container = styled.div`
position: absolute ;
top: 0.4rem;
left: 1rem;

weight: 100%;
color: ${props => props.theme.text};
z-index: 5;

a{
	display: flex;
	align-items: flex-end;
}


svg{
    width: 5rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;


    g{
        path{
            stroke: ${props => props.theme.text};
        }
    }
}


`;


const textVariants = {

	hidden: {
		opacity: 0,
		x: -50,
	},
	visible: {
		opacity: 1,
		x: -5,

		transition: {
			duration: 2,
			delay: 2,
			ease: "easeInOut"
		}

	},
}





const pathVariants = {

	hidden: {
		opacity: 0,
		pathLength: 0,
	},
	visible: {
		opacity: 1,
		pathLength: 1,

		transition: {
			duration: 2,
			ease: "easeInOut"
		}

	},
}

const Text = styled(motion.span)`
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.text};
padding-bottom: 0.5rem;



`;





export default function Logo() {
	return (
		<Container>
			<Link to="/">
				<svg version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-1275.9924603944203 -1576.5280880349112 3211.4412005033582 3211.709132810202"
					enableBackground='new 0 0 24 24'
					height="48px"
					width="48px"
					fill="none"

				>

					<desc>Created with Snap
					</desc>
					<defs>

					</defs>
					<g>

						<g transform="matrix(6.7174,0,0,6.7174,-1013.7465,-1314.1481)">
							<g id="gSl50ulmkqcj2">
								<g>
									<motion.path
										variants={pathVariants}
										animate="visible"
										initial="hidden"
										d="M82.06866,46.80432c0.44048,0.09728,1.81986-0.49205,3.98136-1.64856
			c2.20975-1.09238,5.2579-2.67703,8.94401-4.68989c7.51703-3.80428,17.93356-8.86331,30.43024-13.1756
			c12.47414-4.32378,26.96772-7.99401,42.01273-9.6109c1.87662-0.19844,3.75923-0.39779,5.64507-0.59735
			c1.88943-0.14902,3.78758-0.23685,5.67796-0.35662c3.77602-0.30159,7.57491-0.23849,11.32912-0.3126
			c1.87773-0.03781,3.75569,0.09517,5.61867,0.13513c1.86383,0.08778,3.71739,0.06724,5.55797,0.24432
			c3.67995,0.31842,7.31462,0.49835,10.86098,1.02225c-24.46938,0.31527-45.84834,5.87472-62.983,13.23676
			c-8.58604,3.71305-16.09875,8.00225-22.67894,12.26207c-3.22648,2.26534-6.32965,4.31355-9.06628,6.60401
			c-1.37437,1.11085-2.71513,2.19456-4.02266,3.25142c-1.23869,1.13261-2.44566,2.23617-3.62017,3.31003
			c-9.26917,8.664-14.87678,16.66336-17.84011,22.57063c-2.84336,6.059-3.17654,9.94636-1.23619,11.60844
			c12.396-15.45393,28.45402-29.09509,47.43205-39.08565c18.9328-10.01645,40.72635-16.36285,63.47681-17.78591
			c22.73022-1.48197,46.37234,1.87225,68.61374,10.25464c11.11929,4.17942,21.8819,9.59661,32.00284,16.15094
			c10.12143,6.55412,19.58212,14.25672,28.18671,22.87717c17.22528,17.23357,30.80743,38.36257,39.42282,61.36801
			c8.65921,22.994,12.38708,47.78455,11.09464,72.0957c-1.24237,24.32739-7.58545,48.12822-18.00375,69.4503
			c-10.38284,21.37689-24.93945,40.10056-41.69687,55.30795c-8.38907,7.61682-17.36337,14.36597-26.70444,20.18491
			c-9.34406,5.82074-19.09393,10.61557-28.94733,14.54181c-9.86093,3.9166-19.85266,6.91727-29.78415,9.08392
			c-9.94624,2.10358-19.82362,3.32999-29.4743,3.85846c-9.65497,0.57462-19.08638,0.22992-28.16501-0.64651
			c-1.13516-0.11664-2.26575-0.23282-3.39136-0.34888c-1.12697-0.11121-2.24884-0.22696-3.3564-0.41266
			c-2.22144-0.33698-4.42419-0.67114-6.60777-1.00272c-2.18347-0.34042-4.3194-0.83633-6.45241-1.24716
			c-1.0649-0.21622-2.12482-0.43161-3.18013-0.64587c-1.05194-0.22882-2.08591-0.51355-3.12253-0.76712
			c-2.06961-0.52557-4.12024-1.04596-6.15103-1.56174c-2.00519-0.61169-3.99089-1.21768-5.95718-1.81741
			c-0.98251-0.30374-1.9601-0.60596-2.93306-0.90634c-0.95847-0.3439-1.91188-0.68619-2.86023-1.02689
			c-1.89658-0.68607-3.77393-1.36462-5.63077-2.03653c-7.32208-2.95859-14.25258-6.03729-20.57684-9.50757
			c-12.72123-6.81235-23.36193-14.39328-32.06516-21.69196c-2.17656-1.82785-4.29309-3.57358-6.18667-5.40707
			c-1.91791-1.80673-3.80501-3.49908-5.5228-5.21066c-3.36911-3.48929-6.50893-6.61322-9.06343-9.67181
			c-1.30597-1.50275-2.53819-2.92072-3.69509-4.25165c-1.09204-1.3862-2.11286-2.68185-3.06096-3.88477
			c-0.945-1.20602-1.81723-2.31924-2.61518-3.33749c-0.77715-1.03403-1.43549-2.00656-2.04808-2.85944
			c-2.41859-3.43576-3.70066-5.25714-3.74636-5.32217c-5.46113-8.26123-10.29185-16.883-14.46608-25.78323
			c-4.16677-8.90799-7.4951-18.15073-10.23626-27.52586c-2.76757-9.37598-4.63573-18.97604-5.88218-28.62491
			c-0.68911-4.82196-0.98716-9.67961-1.33614-14.5295l-0.20802-7.29013c-0.05188-1.21474-0.04251-2.42969-0.00855-3.6449
			l0.07005-3.64503c0.42722-19.44357,3.96095-38.7907,10.20834-57.30516c3.20473-9.23248,7.07828-18.25121,11.59234-26.98227
			c4.59464-8.69124,9.87891-17.03811,15.72216-25.0221c0.69774-0.90845,2.08265-2.71173,3.77679-4.91772
			c0.42325-0.55247,0.86528-1.12967,1.32112-1.72482c0.48035-0.5741,0.97521-1.16545,1.47757-1.76587
			c1.00593-1.20171,2.04324-2.44109,3.06269-3.65897c1.98835-2.48425,4.12689-4.67604,5.64749-6.44722
			c1.54144-1.75171,2.56507-2.98889,2.63037-3.26817l-0.00708,0.00397c-17.48207,17.50659-31.66323,38.43564-41.30956,61.28998
			c-9.67891,22.84109-14.85973,47.53831-15.24643,72.3043c-0.40845,24.76634,3.97346,49.61223,12.90819,72.75127
			c8.90224,23.14932,22.40002,44.53232,39.34857,62.56775c16.89465,18.05338,37.32344,32.93442,59.85665,43.33493
			c22.51597,10.43509,47.04972,16.40039,71.79456,17.58765c24.74609,1.20511,49.72084-2.37305,73.14037-10.55167
			c23.42676-8.14722,45.24942-20.94238,63.81384-37.33554c18.55795-16.34717,34.06335-36.25995,45.19333-58.44409
			c11.15619-22.16071,17.92752-46.4855,19.90485-71.17728c1.99942-24.6918-0.77719-49.75745-8.18207-73.42302
			c-7.37558-23.67151-19.42508-45.90224-35.18915-65.02438c-15.71448-19.13124-35.16812-35.17571-56.96564-47.04198
			c-21.789-11.86739-45.88651-19.42662-70.50345-22.19782c-24.61627-2.79403-49.7552-0.82467-73.64371,5.80912
			c-23.89274,6.60539-46.50471,17.92143-66.11643,33.08085L82.06866,46.80432z"
										fill="none" strokeWidth='2'
									></motion.path>
								</g>
							</g>


							<desc>Created with Snap
							</desc>
							<defs>

							</defs>
						</g>
						<g>
							<g transform="matrix(1.024,0,0,-1.024,0,0)">
								<motion.path
									variants={pathVariants}
									animate="visible"
									initial="hidden"
									d="M503 674L613 674L380 0L258 0L31 674L141 674L227 406Q255 320 278 241Q301 163 310 128L320 92Q352 212 416 406L503 674Z"
									viewBox="-1275.9924603944203 -1576.5280880349112 3211.4412005033582 3211.709132810202"


									fill="none" strokeWidth='40'
								>

								</motion.path>
							</g>
						</g>
						<g transform="matrix(0.75,0,0,0.75,122.368,842.496)">
							<g transform="matrix(1.024,0,0,-1.024,0,0)">
								<motion.path
									variants={pathVariants}
									animate="visible"
									initial="hidden" d="M492 625L154 79L494 79L494 0L46 0L46 72L384 618L50 618L50 697L492 697L492 625Z" fill="none" strokeWidth='40' >

								</motion.path>
							</g>
						</g>
					</g>
				</svg>
				<Text
					variants={textVariants}
					animate="visible"
					initial="hidden"
					
				>
					Veronika Zanina MakeUp & Hairstyling
				</Text>
			</Link>

		</Container>
	)
};