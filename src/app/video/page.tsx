export default function VideoPage() {
  function buildVideoCard(url: string, descricao: string) {
    return (
      <div className="flex flex-col items-center">
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
    <div className="mt-8 px-4 sm:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 content-center">
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
      {buildVideoCard(
        "https://res.cloudinary.com/rexhelicoides/video/upload/v1715349608/videos/carreta2_uvc7wk.mp4",
        "Acoplada na carreta"
      )}
      {buildVideoCard(
        "https://res.cloudinary.com/rexhelicoides/video/upload/v1715350104/videos/helicoide1_j8y1am.mp4",
        "Excelente para seu trabalho"
      )}
    </div>
  );
}
