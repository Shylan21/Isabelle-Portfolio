import shecodeintro from '../../assets/certificates/SheCodesBasicCertificate.png'
import shecodeplus from '../../assets/certificates/SheCodesPlusCertificate.png'
import boolean from '../../assets/certificates/BooleanCertificate.png'

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
