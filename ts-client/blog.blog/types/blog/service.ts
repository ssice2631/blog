/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { MsgCreatePost, MsgCreatePostResponse } from "./tx";

export const protobufPackage = "blog.blog";

/** Msg defines the Msg service. */
export interface Service {
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
}

export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreatePost = this.CreatePost.bind(this);
  }
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse> {
    const data = MsgCreatePost.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Service", "CreatePost", data);
    return promise.then((data) => MsgCreatePostResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
