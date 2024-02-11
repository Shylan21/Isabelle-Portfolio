import shecodeintro from '../../certificates/SheCodesBasicCertificate.png'
import shecodeplus from '../../certificates/SheCodesPlusCertificate.png'
import boolean from '../../certificates/BooleanCertificate.png'

const certificates = [
	{
		id: 'shecodeintro', // Must be unique
		image: shecodeintro,
		certificateName: 'SheCodesIntro',
	},
	{
		id: 'boolean',
		image: boolean,
		certificateName: 'Boolean',
	},
	{
		id: 'shecodeplus',
		image: shecodeplus,
		certificateName: 'SheCodesPlus',
	},
]

export { certificates }
