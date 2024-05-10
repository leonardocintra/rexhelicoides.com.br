export default function VideoPage() {
  function buildVideoCard(url: string, descricao: string) {
    return (
      <div>
        <video
          muted={true}
          className="rounded-xl"
          src={url}
          loop={true}
          width={380}
          autoPlay={true}
        ></video>
        <h4 className="text-center text-slate-700 text-2xl pt-3">
          {descricao}
        </h4>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8 px-2">
      {buildVideoCard(
        "https://res.cloudinary.com/rexhelicoides/video/upload/v1715300620/videos/encaixe-perfeito2_raygd5.mp4",
        "Encaixe Perfeito"
      )}
      {buildVideoCard(
        "https://res.cloudinary.com/rexhelicoides/video/upload/v1715299595/videos/encaixe-perfeito_lnlipl.mp4",
        "Encaixe Perfeito"
      )}
      {buildVideoCard(
        "https://res.cloudinary.com/rexhelicoides/video/upload/v1715299601/videos/helicoidao_jnhvyb.mp4",
        "Precisão e potência"
      )}

      {buildVideoCard(
        "https://res.cloudinary.com/rexhelicoides/video/upload/v1715300622/videos/carreta1_do8lbx.mp4",
        "Acoplada na carreta"
      )}
    </div>
  );
}
