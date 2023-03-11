interface AudioPlayer {
  play(audioType: string, fileName: string): void;
}

interface AdvancedAudioPlayer {
  playVlcFile(fileName: string): void;
  playMp4File(fileName: string): void;
}

class VlcPlayer implements AdvancedAudioPlayer {
  public playVlcFile(fileName: string): void {
    console.log(`Playing vlc file. Name: ${fileName}`);
  }

  public playMp4File(fileName: string): void {
    // do nothing
  }
}

class Mp4Player implements AdvancedAudioPlayer {
  public playVlcFile(fileName: string): void {
    // do nothing
  }

  public playMp4File(fileName: string): void {
    console.log(`Playing mp4 file. Name: ${fileName}`);
  }
}

class AudioPlayerAdapter implements AudioPlayer {
  private advancedAudioPlayer: AdvancedAudioPlayer;

  constructor(audioType: string) {
    if (audioType === "vlc") {
      this.advancedAudioPlayer = new VlcPlayer();
    } else if (audioType === "mp4") {
      this.advancedAudioPlayer = new Mp4Player();
    } else {
      throw new Error("Invalid audio type.");
    }
  }

  public play(audioType: string, fileName: string): void {
    if (audioType === "vlc") {
      this.advancedAudioPlayer.playVlcFile(fileName);
    } else if (audioType === "mp4") {
      this.advancedAudioPlayer.playMp4File(fileName);
    } else {
      throw new Error("Invalid audio type.");
    }
  }
}

class MyAudioPlayer implements AudioPlayer {
  private audioPlayerAdapter: AudioPlayerAdapter;

  public play(audioType: string, fileName: string): void {
    if (audioType === "mp3") {
      console.log(`Playing mp3 file. Name: ${fileName}`);
    } else if (audioType === "vlc" || audioType === "mp4") {
      this.audioPlayerAdapter = new AudioPlayerAdapter(audioType);
      this.audioPlayerAdapter.play(audioType, fileName);
    } else {
      throw new Error("Invalid audio type.");
    }
  }
}

const myAudioPlayer = new MyAudioPlayer();
myAudioPlayer.play("mp3", "song.mp3"); // Playing mp3 file. Name: song.mp3
myAudioPlayer.play("vlc", "song.vlc"); // Playing vlc file. Name: song.vlc
myAudioPlayer.play("mp4", "song.mp4"); // Playing mp4 file. Name: song.mp4
