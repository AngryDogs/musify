function withPrefix(constantName) {
  return `@musicPlayer/${constantName}`;
}

export const MUSIC_STREAM_RECEIVED = withPrefix('MUSIC_STREAM_RECEIVED');
export const REQUEST_MUSIC_STREAM = withPrefix('REQUEST_MUSIC_STREAM');
export const REQUEST_MUSIC_STREAM_ERROR = withPrefix('REQUEST_MUSIC_STREAM_ERROR');

export const PLAY = withPrefix('PLAY');
export const PAUSE = withPrefix('PAUSE');
export const STOP = withPrefix('STOP');
