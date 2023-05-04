interface MajorCredits {
	credits: number;
	brand: unknown;
}

interface MinorCredits {
	credits: number;
	brand: unknown;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	return <MajorCredits>{ brand: "major", credits: subject1.credits + subject2.credits };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	return <MinorCredits>{ brand: "minor", credits: subject1.credits + subject2.credits };
}
