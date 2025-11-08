import React from 'react';

const LandingPage: React.FC = () => {
    return (
        <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <h1>LPページ</h1>

            <section style={{ marginTop: '30px', lineHeight: '1.8' }}>
                <h2>AIについて</h2>
                <p>
                    AI（人工知能）は、人間の知的活動をコンピュータで実現する技術です。
                    機械学習やディープラーニングの発展により、画像認識、自然言語処理、
                    音声認識など、様々な分野で活用されています。
                </p>
                <p>
                    現代のAIは、大量のデータから学習し、パターンを認識することで、
                    複雑なタスクを自動化したり、人間の意思決定をサポートしたりできます。
                    ビジネス、医療、教育など、あらゆる分野でAIの活用が進んでいます。
                </p>
                <p>
                    これからも技術の進化とともに、AIはより身近な存在となり、
                    私たちの生活をより便利で豊かなものにしていくでしょう。
                </p>
            </section>
        </div>
    );
};

export default LandingPage;