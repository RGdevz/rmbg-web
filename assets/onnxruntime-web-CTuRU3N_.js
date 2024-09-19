/*!
 * ONNX Runtime Web v1.20.0
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var sa=Object.defineProperty,hf=Object.getOwnPropertyDescriptor,cf=Object.getOwnPropertyNames,ff=Object.prototype.hasOwnProperty,mf=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),M=(e,t)=>()=>(e&&(t=e(e=0)),t),Jt=(e,t)=>{for(var r in t)sa(e,r,{get:t[r],enumerable:!0})},gf=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of cf(t))!ff.call(e,a)&&a!==r&&sa(e,a,{get:()=>t[a],enumerable:!(i=hf(t,a))||i.enumerable});return e},Ir=e=>gf(sa({},"__esModule",{value:!0}),e),Nt,ut,Ot,Jn,oa,ua=M(()=>{Nt=new Map,ut=[],Ot=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=Nt.get(e);if(i===void 0)Nt.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let a=ut.indexOf(e);a!==-1&&ut.splice(a,1);for(let n=0;n<ut.length;n++)if(Nt.get(ut[n]).priority<=r){ut.splice(n,0,e);return}ut.push(e)}return}throw new TypeError("not a valid backend")},Jn=async e=>{let t=Nt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},oa=async e=>{let t=e.executionProviders||[],r=t.map(d=>typeof d=="string"?d:d.name),i=r.length===0?ut:r,a,n=[],s=new Set;for(let d of i){let p=await Jn(d);typeof p=="string"?n.push({name:d,err:p}):(a||(a=p),a===p&&s.add(d))}if(!a)throw new Error(`no available backend found. ERR: ${n.map(d=>`[${d.name}] ${d.err}`).join(", ")}`);for(let{name:d,err:p}of n)r.includes(d)&&console.warn(`removing requested execution provider "${d}" from session options because it is not available: ${p}`);let l=t.filter(d=>s.has(typeof d=="string"?d:d.name));return[a,new Proxy(e,{get:(d,p)=>p==="executionProviders"?l:Reflect.get(d,p)})]}}),yf=M(()=>{ua()}),bl,$f=M(()=>{bl="1.20.0"}),ui,Ue,_l=M(()=>{$f(),ui="warning",Ue={wasm:{},webgl:{},webgpu:{},versions:{common:bl},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);ui=e}},get logLevel(){return ui}},Object.defineProperty(Ue,"logLevel",{enumerable:!0})}),ge,wf=M(()=>{_l(),ge=Ue}),vl,xl,bf=M(()=>{vl=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let a,n;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[3]):(a=e.dims[3],n=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",l=t?.norm,d,p;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?p=[0,0,0,0]:typeof l.bias=="number"?p=[l.bias,l.bias,l.bias,l.bias]:(p=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(p[3]=l.bias[3]));let c=n*a,u=0,m=c,g=c*2,$=-1;s==="RGBA"?(u=0,m=c,g=c*2,$=c*3):s==="RGB"?(u=0,m=c,g=c*2):s==="RBG"&&(u=0,g=c,m=c*2);for(let y=0;y<n;y++)for(let x=0;x<a;x++){let v=(e.data[u++]-p[0])*d[0],b=(e.data[m++]-p[1])*d[1],S=(e.data[g++]-p[2])*d[2],k=$===-1?255:(e.data[$++]-p[3])*d[3];i.fillStyle="rgba("+v+","+b+","+S+","+k+")",i.fillRect(x,y,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},xl=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let a,n,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(a=e.dims[2],n=e.dims[1],s=e.dims[3]):(a=e.dims[3],n=e.dims[2],s=e.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",d=t?.norm,p,c;d===void 0||d.mean===void 0?p=[255,255,255,255]:typeof d.mean=="number"?p=[d.mean,d.mean,d.mean,d.mean]:(p=[d.mean[0],d.mean[1],d.mean[2],255],d.mean[3]!==void 0&&(p[3]=d.mean[3])),d===void 0||d.bias===void 0?c=[0,0,0,0]:typeof d.bias=="number"?c=[d.bias,d.bias,d.bias,d.bias]:(c=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(c[3]=d.bias[3]));let u=n*a;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let m=4,g=0,$=1,y=2,x=3,v=0,b=u,S=u*2,k=-1;l==="RGBA"?(v=0,b=u,S=u*2,k=u*3):l==="RGB"?(v=0,b=u,S=u*2):l==="RBG"&&(v=0,S=u,b=u*2),i=r.createImageData(a,n);for(let E=0;E<n*a;g+=m,$+=m,y+=m,x+=m,E++)i.data[g]=(e.data[v++]-c[0])*p[0],i.data[$]=(e.data[b++]-c[1])*p[1],i.data[y]=(e.data[S++]-c[2])*p[2],i.data[x]=k===-1?255:(e.data[k++]-c[3])*p[3]}else throw new Error("Can not access image data");return i}}),hr,Sl,kl,Il,El,_f=M(()=>{la(),hr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,a=t.norm??{mean:255,bias:0},n,s;typeof a.mean=="number"?n=[a.mean,a.mean,a.mean,a.mean]:n=[a.mean[0],a.mean[1],a.mean[2],a.mean[3]??255],typeof a.bias=="number"?s=[a.bias,a.bias,a.bias,a.bias]:s=[a.bias[0],a.bias[1],a.bias[2],a.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",d=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",p=r*i,c=d==="RGBA"?new Float32Array(p*4):new Float32Array(p*3),u=4,m=0,g=1,$=2,y=3,x=0,v=p,b=p*2,S=-1;l==="RGB"&&(u=3,m=0,g=1,$=2,y=-1),d==="RGBA"?S=p*3:d==="RBG"?(x=0,b=p,v=p*2):d==="BGR"&&(b=0,v=p,x=p*2);for(let k=0;k<p;k++,m+=u,$+=u,g+=u,y+=u)c[x++]=(e[m]+s[0])/n[0],c[v++]=(e[g]+s[1])/n[1],c[b++]=(e[$]+s[2])/n[2],S!==-1&&y!==-1&&(c[S++]=(e[y]+s[3])/n[3]);return d==="RGBA"?new Ge("float32",c,[1,4,r,i]):new Ge("float32",c,[1,3,r,i])},Sl=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,a=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,n=typeof e=="string",s,l=t??{},d=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},p=c=>c instanceof HTMLCanvasElement||c instanceof OffscreenCanvas?c.getContext("2d"):null;if(r){let c=d();c.width=e.width,c.height=e.height;let u=p(c);if(u!=null){let m=e.height,g=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(m=t.resizedHeight,g=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=m,l.width=g}else l.tensorFormat="RGBA",l.height=m,l.width=g;u.drawImage(e,0,0),s=u.getImageData(0,0,g,m).data}else throw new Error("Can not access image data")}else if(i){let c,u;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(c=t.resizedHeight,u=t.resizedWidth):(c=e.height,u=e.width),t!==void 0&&(l=t),l.format="RGBA",l.height=c,l.width=u,t!==void 0){let m=d();m.width=u,m.height=c;let g=p(m);if(g!=null)g.putImageData(e,0,0),s=g.getImageData(0,0,u,c).data;else throw new Error("Can not access image data")}else s=e.data}else if(a){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let c=d();c.width=e.width,c.height=e.height;let u=p(c);if(u!=null){let m=e.height,g=e.width;return u.drawImage(e,0,0,g,m),s=u.getImageData(0,0,g,m).data,l.height=m,l.width=g,hr(s,l)}else throw new Error("Can not access image data")}else{if(n)return new Promise((c,u)=>{let m=d(),g=p(m);if(!e||!g)return u();let $=new Image;$.crossOrigin="Anonymous",$.src=e,$.onload=()=>{m.width=$.width,m.height=$.height,g.drawImage($,0,0,m.width,m.height);let y=g.getImageData(0,0,m.width,m.height);l.height=m.height,l.width=m.width,c(hr(y.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return hr(s,l);throw new Error("Input data provided is not supported - aborted tensor creation")},kl=(e,t)=>{let{width:r,height:i,download:a,dispose:n}=t,s=[1,i,r,4];return new Ge({location:"texture",type:"float32",texture:e,dims:s,download:a,dispose:n})},Il=(e,t)=>{let{dataType:r,dims:i,download:a,dispose:n}=t;return new Ge({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:a,dispose:n})},El=(e,t,r)=>new Ge({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),xt,Lt,li,Tl,vf=M(()=>{xt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Lt=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),li=!1,Tl=()=>{if(!li){li=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=typeof Float16Array<"u"&&Float16Array.from;e&&(xt.set("int64",BigInt64Array),Lt.set(BigInt64Array,"int64")),t&&(xt.set("uint64",BigUint64Array),Lt.set(BigUint64Array,"uint64")),r?(xt.set("float16",Float16Array),Lt.set(Float16Array,"float16")):xt.set("float16",Uint16Array)}}}),Cl,zl,xf=M(()=>{la(),Cl=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},zl=(e,t)=>{switch(e.location){case"cpu":return new Ge(e.type,e.data,t);case"cpu-pinned":return new Ge({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Ge({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Ge({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Ge,la=M(()=>{bf(),_f(),vf(),xf(),Ge=class{constructor(e,t,r){Tl();let i,a;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,a=e.dims,e.location){case"cpu-pinned":{let s=xt.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,l;if(typeof e=="string")if(i=e,l=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let d=xt.get(e);if(d===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&d===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${d.name} as data.`);e==="uint64"||e==="int64"?s=d.from(t,BigInt):s=d.from(t)}else if(t instanceof d)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${i} tensor's data must be type of ${d}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let d=typeof e[0];if(d==="string")i="string",s=e;else if(d==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${d}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let d=Lt.get(e.constructor);if(d===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=d,s=e}if(l===void 0)l=[s.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");a=l,this.cpuData=s,this.dataLocation="cpu"}let n=Cl(a);if(this.cpuData&&n!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(n/2)===this.cpuData.length))throw new Error(`Tensor's size(${n}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=a,this.size=n}static async fromImage(e,t){return Sl(e,t)}static fromTexture(e,t){return kl(e,t)}static fromGpuBuffer(e,t){return Il(e,t)}static fromPinnedBuffer(e,t,r){return El(e,t,r)}toDataURL(e){return vl(this,e)}toImageData(e){return xl(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return zl(this,e)}}}),Oe,da=M(()=>{la(),Oe=Ge}),Er,di,Je,Fe,Al=M(()=>{_l(),Er=(e,t)=>{(typeof Ue.trace>"u"?!Ue.wasm.trace:!Ue.trace)||console.timeStamp(`${e}::ORT::${t}`)},di=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let a=0;a<r.length;a++){if(i&&!r[a].includes("TRACE_FUNC")){let n=`FUNC_${e}::${r[a].trim().split(" ")[1]}`;t&&(n+=`::${t}`),Er("CPU",n);return}r[a].includes("TRACE_FUNC")&&(i=!0)}},Je=e=>{(typeof Ue.trace>"u"?!Ue.wasm.trace:!Ue.trace)||di("BEGIN",e)},Fe=e=>{(typeof Ue.trace>"u"?!Ue.wasm.trace:!Ue.trace)||di("END",e)}}),Ol,Sf=M(()=>{ua(),da(),Al(),Ol=class Rl{constructor(t){this.handler=t}async run(t,r,i){Je();let a={},n={};if(typeof t!="object"||t===null||t instanceof Oe||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Oe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let p of r){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);a[p]=null}if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,c=Object.getOwnPropertyNames(r);for(let u of this.outputNames)if(c.indexOf(u)!==-1){let m=r[u];(m===null||m instanceof Oe)&&(p=!0,s=!1,a[u]=m)}if(p){if(typeof i=="object"&&i!==null)n=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else n=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of this.inputNames)if(typeof t[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(s)for(let p of this.outputNames)a[p]=null;let l=await this.handler.run(t,a,n),d={};for(let p in l)if(Object.hasOwnProperty.call(l,p)){let c=l[p];c instanceof Oe?d[p]=c:d[p]=new Oe(c.type,c.data,c.dims)}return Fe(),d}async release(){return this.handler.dispose()}static async create(t,r,i,a){Je();let n,s={};if(typeof t=="string"){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(n=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let c=t,u=0,m=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(u=r,!Number.isSafeInteger(u))throw new RangeError("'byteOffset' must be an integer.");if(u<0||u>=c.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${c.byteLength}).`);if(m=t.byteLength-u,typeof i=="number"){if(m=i,!Number.isSafeInteger(m))throw new RangeError("'byteLength' must be an integer.");if(m<=0||u+m>c.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${c.byteLength-u}].`);if(typeof a=="object"&&a!==null)s=a;else if(typeof a<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");n=new Uint8Array(c,u,m)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,d]=await oa(s),p=await l.createInferenceSessionHandler(n,d);return Fe(),new Rl(p)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Bl,kf=M(()=>{Sf(),Bl=Ol}),If=M(()=>{}),Ef=M(()=>{}),Tf=M(()=>{}),Cf=M(()=>{}),es,Dl,zf=M(()=>{ua(),da(),es="Training backend could not be resolved. Make sure you're using the correct configuration & WebAssembly files.",Dl=class Ml{constructor(t,r,i){this.handler=t,this.hasOptimizerModel=r,this.hasEvalModel=i}get trainingInputNames(){return this.handler.inputNames}get trainingOutputNames(){return this.handler.outputNames}get evalInputNames(){if(this.hasEvalModel)return this.handler.evalInputNames;throw new Error("This training session has no evalModel loaded.")}get evalOutputNames(){if(this.hasEvalModel)return this.handler.evalOutputNames;throw new Error("This training session has no evalModel loaded.")}static async create(t,r){let i=t.evalModel||"",a=t.optimizerModel||"",n=r||{},[s,l]=await oa(n);if(s.createTrainingSessionHandler){let d=await s.createTrainingSessionHandler(t.checkpointState,t.trainModel,i,a,l);return new Ml(d,!!t.optimizerModel,!!t.evalModel)}else throw new Error(es)}typeNarrowingForRunStep(t,r,i,a,n){let s={},l={};if(typeof i!="object"||i===null||i instanceof Oe||Array.isArray(i))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let d=!0;if(typeof a=="object"){if(a===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(a instanceof Oe)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(a)){if(a.length===0)throw new TypeError("'fetches' cannot be an empty array.");d=!1;for(let p of a){if(typeof p!="string")throw new TypeError("'fetches' must be a string array or an object.");if(r.indexOf(p)===-1)throw new RangeError(`'fetches' contains invalid output name: ${p}.`);s[p]=null}if(typeof n=="object"&&n!==null)l=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else{let p=!1,c=Object.getOwnPropertyNames(a);for(let u of r)if(c.indexOf(u)!==-1){let m=a[u];(m===null||m instanceof Oe)&&(p=!0,d=!1,s[u]=m)}if(p){if(typeof n=="object"&&n!==null)l=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else l=a}}else if(typeof a<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let p of t)if(typeof i[p]>"u")throw new Error(`input '${p}' is missing in 'feeds'.`);if(d)for(let p of r)s[p]=null;return[s,l]}convertHandlerReturnTypeToMapOfTensors(t){let r={};for(let i in t)if(Object.hasOwnProperty.call(t,i)){let a=t[i];a instanceof Oe?r[i]=a:r[i]=new Oe(a.type,a.data,a.dims)}return r}async lazyResetGrad(){await this.handler.lazyResetGrad()}async runTrainStep(t,r,i){let[a,n]=this.typeNarrowingForRunStep(this.trainingInputNames,this.trainingOutputNames,t,r,i),s=await this.handler.runTrainStep(t,a,n);return this.convertHandlerReturnTypeToMapOfTensors(s)}async runOptimizerStep(t){if(this.hasOptimizerModel)await this.handler.runOptimizerStep(t||{});else throw new Error("This TrainingSession has no OptimizerModel loaded.")}async runEvalStep(t,r,i){if(this.hasEvalModel){let[a,n]=this.typeNarrowingForRunStep(this.evalInputNames,this.evalOutputNames,t,r,i),s=await this.handler.runEvalStep(t,a,n);return this.convertHandlerReturnTypeToMapOfTensors(s)}else throw new Error("This TrainingSession has no EvalModel loaded.")}async getParametersSize(t=!0){return this.handler.getParametersSize(t)}async loadParametersBuffer(t,r=!0){let i=await this.getParametersSize(r);if(t.length!==4*i)throw new Error("Size of the buffer passed into loadParametersBuffer must match the number of parameters in the model. Please use getParametersSize method to check.");return this.handler.loadParametersBuffer(t,r)}async getContiguousParameters(t=!0){return this.handler.getContiguousParameters(t)}async release(){return this.handler.dispose()}}}),Pl,Af=M(()=>{zf(),Pl=Dl}),Ul={};Jt(Ul,{InferenceSession:()=>Bl,TRACE:()=>Er,TRACE_FUNC_BEGIN:()=>Je,TRACE_FUNC_END:()=>Fe,Tensor:()=>Oe,TrainingSession:()=>Pl,env:()=>ge,registerBackend:()=>Ot});var Le=M(()=>{yf(),wf(),kf(),da(),If(),Ef(),Al(),Tf(),Cf(),Af()}),pa=M(()=>{}),Nl={};Jt(Nl,{default:()=>Wl});var pi,hi,Wl,Of=M(()=>{Dh(),Mt(),Mr(),pi="ort-wasm-proxy-worker",hi=globalThis.self?.name===pi,hi&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":ha(r.wasm).then(()=>{Ia(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:a}=r;Ea(a,i).then(()=>{postMessage({type:t})},n=>{postMessage({type:t,err:n})});break}case"copy-from":{let{buffer:i}=r,a=Dr(i);postMessage({type:t,out:a});break}case"create":{let{model:i,options:a}=r;Ta(i,a).then(n=>{postMessage({type:t,out:n})},n=>{postMessage({type:t,err:n})});break}case"release":Ca(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:a,inputs:n,outputIndices:s,options:l}=r;za(i,a,n,s,new Array(s.length).fill(null),l).then(d=>{d.some(p=>p[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:d},Oa([...n,...d]))},d=>{postMessage({type:t,err:d})});break}case"end-profiling":Aa(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),Wl=hi?null:e=>new Worker(e??At,{type:"module",name:pi})}),ql={};Jt(ql,{default:()=>Vl});var ci,fi,Vl,Rf=M(()=>{fi=(ci=import.meta.url,async function(e={}){function t(){return ie.buffer!=pe.buffer&&Ae(),pe}function r(){return ie.buffer!=pe.buffer&&Ae(),X}function i(){return ie.buffer!=pe.buffer&&Ae(),ne}function a(){return ie.buffer!=pe.buffer&&Ae(),R}function n(){return ie.buffer!=pe.buffer&&Ae(),U}function s(){return ie.buffer!=pe.buffer&&Ae(),ee}function l(){return ie.buffer!=pe.buffer&&Ae(),fe}function d(){return ie.buffer!=pe.buffer&&Ae(),Ne}var p,c,u=Object.assign({},e),m=new Promise((o,h)=>{p=o,c=h}),g=typeof window=="object",$=typeof importScripts=="function",y=$&&self.name=="em-pthread";u.mountExternalData=(o,h)=>{(u.Fb||(u.Fb=new Map)).set(o,h)},u.unmountExternalData=()=>{delete u.Fb};var x=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let v=()=>{let o=(f,w,_)=>(...I)=>{let A=Xe,D=w?.();I=f(...I);let N=w?.();return D!==N&&(f=N,_(D),w=_=null),Xe!=A?new Promise((V,L)=>{ei={resolve:V,reject:L}}):I},h=f=>async(...w)=>{try{if(u.Eb)throw Error("Session already started");let _=u.Eb={bc:w[0],errors:[]},I=await f(...w);if(u.Eb!==_)throw Error("Session mismatch");u.Mb?.flush();let A=_.errors;if(0<A.length){let D=await Promise.all(A);if(D=D.filter(N=>N),0<D.length)throw Error(D.join(`
`))}return I}finally{u.Eb=null}};u._OrtCreateSession=o(u._OrtCreateSession,()=>u._OrtCreateSession,f=>u._OrtCreateSession=f),u._OrtRun=h(o(u._OrtRun,()=>u._OrtRun,f=>u._OrtRun=f)),u._OrtRunWithBinding=h(o(u._OrtRunWithBinding,()=>u._OrtRunWithBinding,f=>u._OrtRunWithBinding=f)),u._OrtBindInput=o(u._OrtBindInput,()=>u._OrtBindInput,f=>u._OrtBindInput=f),v=void 0};u.jsepInit=(o,h)=>{if(v?.(),o==="webgpu"){[u.Mb,u.Tb,u.Xb,u.Nb,u.Wb,u.jb,u.Yb,u.$b,u.Ub,u.Vb,u.Zb]=h;let f=u.Mb;u.jsepRegisterBuffer=(w,_,I,A)=>f.registerBuffer(w,_,I,A),u.jsepGetBuffer=w=>f.getBuffer(w),u.jsepCreateDownloader=(w,_,I)=>f.createDownloader(w,_,I),u.jsepOnReleaseSession=w=>{f.onReleaseSession(w)},u.jsepOnRunStart=w=>f.onRunStart(w)}};var b,S,k=Object.assign({},u),E="./this.program",C=(o,h)=>{throw h},z="";(g||$)&&($?z=self.location.href:typeof document<"u"&&document.currentScript&&(z=document.currentScript.src),ci&&(z=ci),z=z.startsWith("blob:")?"":z.substr(0,z.replace(/[?#].*/,"").lastIndexOf("/")+1),$&&(S=o=>{var h=new XMLHttpRequest;return h.open("GET",o,!1),h.responseType="arraybuffer",h.send(null),new Uint8Array(h.response)}),b=(o,h,f)=>{var w=new XMLHttpRequest;w.open("GET",o,!0),w.responseType="arraybuffer",w.onload=()=>{w.status==200||w.status==0&&w.response?h(w.response):f()},w.onerror=f,w.send(null)});var P,q=console.log.bind(console),W=console.error.bind(console),J=q,Q=W;if(Object.assign(u,k),k=null,y){let o=function(h){try{var f=h.data,w=f.cmd;if(w==="load"){let _=[];self.onmessage=I=>_.push(I),self.startWorker=()=>{postMessage({cmd:"loaded"});for(let I of _)o(I);self.onmessage=o};for(let I of f.handlers)u[I]&&!u[I].proxy||(u[I]=(...A)=>{postMessage({Lb:"callHandler",kc:I,args:A})},I=="print"&&(J=u[I]),I=="printErr"&&(Q=u[I]));ie=f.wasmMemory,Ae(),ae(f.wasmModule)}else if(w==="run"){ai(f.pthread_ptr,0,0,1,0,0),Qr(f.pthread_ptr),Xh(),Ha(),se||(qn(),se=!0);try{Qh(f.start_routine,f.arg)}catch(_){if(_!="unwind")throw _}}else w==="cancel"?Ct()&&dr(-1):f.target!=="setimmediate"&&(w==="checkMailbox"?se&&tr():w&&(Q(`worker: received unknown command ${w}`),Q(f)))}catch(_){throw Vn(),_}};var ae,se=!1;Q=function(...h){h=h.join(" "),console.error(h)},self.alert=function(...h){postMessage({Lb:"alert",text:h.join(" "),mc:Ct()})},u.instantiateWasm=(h,f)=>new Promise(w=>{ae=_=>{_=new WebAssembly.Instance(_,Ua()),f(_),w()}}),self.onunhandledrejection=h=>{throw h.reason||h},self.onmessage=o}u.wasmBinary&&(P=u.wasmBinary);var ie,K,oe,pe,X,ne,R,U,ee,fe,me,Be,Ne,Re=!1;function Ae(){var o=ie.buffer;u.HEAP8=pe=new Int8Array(o),u.HEAP16=ne=new Int16Array(o),u.HEAPU8=X=new Uint8Array(o),u.HEAPU16=R=new Uint16Array(o),u.HEAP32=U=new Int32Array(o),u.HEAPU32=ee=new Uint32Array(o),u.HEAPF32=fe=new Float32Array(o),u.HEAPF64=Ne=new Float64Array(o),u.HEAP64=me=new BigInt64Array(o),u.HEAPU64=Be=new BigUint64Array(o)}if(!y){if(!((ie=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0})).buffer instanceof x))throw Q("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");Ae()}var Ee=[],ke=[],rt=[],it=0,yt=null;function Ra(){if(--it==0&&yt){var o=yt;yt=null,o()}}function It(o){throw Q(o="Aborted("+o+")"),Re=!0,oe=1,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),c(o),o}var Nr,Ba=o=>o.startsWith("data:application/octet-stream;base64,"),Da=o=>o.startsWith("file://");function Ma(o){if(o==Nr&&P)return new Uint8Array(P);if(S)return S(o);throw"both async and sync fetching of the wasm failed"}function Pa(o,h,f){return function(w){if(!P&&(g||$)){if(typeof fetch=="function"&&!Da(w))return fetch(w,{credentials:"same-origin"}).then(_=>{if(!_.ok)throw`failed to load wasm binary file at '${w}'`;return _.arrayBuffer()}).catch(()=>Ma(w));if(b)return new Promise((_,I)=>{b(w,A=>_(new Uint8Array(A)),I)})}return Promise.resolve().then(()=>Ma(w))}(o).then(w=>WebAssembly.instantiate(w,h)).then(f,w=>{Q(`failed to asynchronously prepare wasm: ${w}`),It(w)})}function Ua(){return{a:{M:Yh,za:Kh,b:Jh,$:La,z:Xa,pa:Qa,X:Ja,Z:en,qa:tn,na:rn,ga:an,ma:nn,J:sn,Y:on,V:un,oa:ln,W:dn,va:ec,D:tc,P:rc,O:ac,C:sc,s:oc,p:uc,E:lc,y:gc,Q:yc,ta:$c,ja:wc,T:bc,aa:_c,F:vc,ia:Qr,sa:xc,u:Sc,B:Ec,o:Tc,m:zc,c:Yr,n:Ac,k:Bc,Aa:Dc,r:Mc,f:Pc,v:Uc,l:Nc,g:Wc,i:qc,j:Vc,h:Hc,e:jc,da:Gc,ea:Fc,fa:Lc,ba:Sn,ca:kn,S:Kc,d:Yc,N:Xc,G:Qc,K:Zc,w:Jc,ra:ef,U:tf,t:En,x:rf,L:af,R:nf,ya:sf,xa:of,ka:zn,la:An,_:jr,A:On,I:Rn,ha:Bn,H:Dn,a:ie,wa:Hr,ua:Un,q:df}}}var Wr={849620:(o,h,f,w)=>{if(u===void 0||!u.Fb)return 1;if((o=xe(o>>>0)).startsWith("./")&&(o=o.substring(2)),!(o=u.Fb.get(o)))return 2;if(w>>>=0,(h>>>=0)+(f>>>=0)>o.byteLength)return 3;try{return r().set(o.subarray(h,h+f),w>>>0),0}catch{return 4}},850121:()=>{u.Ub()},850152:()=>{u.Vb()},850181:()=>{u.Zb()},850206:o=>u.Tb(o),850239:o=>u.Xb(o),850271:(o,h,f)=>{u.Nb(o,h,f,!0)},850310:(o,h,f)=>{u.Nb(o,h,f)},850343:()=>typeof wasmOffsetConverter<"u",850400:o=>{u.jb("Abs",o,void 0)},850451:o=>{u.jb("Neg",o,void 0)},850502:o=>{u.jb("Floor",o,void 0)},850555:o=>{u.jb("Ceil",o,void 0)},850607:o=>{u.jb("Reciprocal",o,void 0)},850665:o=>{u.jb("Sqrt",o,void 0)},850717:o=>{u.jb("Exp",o,void 0)},850768:o=>{u.jb("Erf",o,void 0)},850819:o=>{u.jb("Sigmoid",o,void 0)},850874:(o,h,f)=>{u.jb("HardSigmoid",o,{alpha:h,beta:f})},850953:o=>{u.jb("Log",o,void 0)},851004:o=>{u.jb("Sin",o,void 0)},851055:o=>{u.jb("Cos",o,void 0)},851106:o=>{u.jb("Tan",o,void 0)},851157:o=>{u.jb("Asin",o,void 0)},851209:o=>{u.jb("Acos",o,void 0)},851261:o=>{u.jb("Atan",o,void 0)},851313:o=>{u.jb("Sinh",o,void 0)},851365:o=>{u.jb("Cosh",o,void 0)},851417:o=>{u.jb("Asinh",o,void 0)},851470:o=>{u.jb("Acosh",o,void 0)},851523:o=>{u.jb("Atanh",o,void 0)},851576:o=>{u.jb("Tanh",o,void 0)},851628:o=>{u.jb("Not",o,void 0)},851679:(o,h,f)=>{u.jb("Clip",o,{min:h,max:f})},851748:o=>{u.jb("Clip",o,void 0)},851800:(o,h)=>{u.jb("Elu",o,{alpha:h})},851858:o=>{u.jb("Relu",o,void 0)},851910:(o,h)=>{u.jb("LeakyRelu",o,{alpha:h})},851974:(o,h)=>{u.jb("ThresholdedRelu",o,{alpha:h})},852044:(o,h)=>{u.jb("Cast",o,{to:h})},852102:o=>{u.jb("Add",o,void 0)},852153:o=>{u.jb("Sub",o,void 0)},852204:o=>{u.jb("Mul",o,void 0)},852255:o=>{u.jb("Div",o,void 0)},852306:o=>{u.jb("Pow",o,void 0)},852357:o=>{u.jb("Equal",o,void 0)},852410:o=>{u.jb("Greater",o,void 0)},852465:o=>{u.jb("GreaterOrEqual",o,void 0)},852527:o=>{u.jb("Less",o,void 0)},852579:o=>{u.jb("LessOrEqual",o,void 0)},852638:(o,h,f,w,_)=>{u.jb("ReduceMean",o,{keepDims:!!h,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,_>>>0)):[]})},852797:(o,h,f,w,_)=>{u.jb("ReduceMax",o,{keepDims:!!h,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,_>>>0)):[]})},852955:(o,h,f,w,_)=>{u.jb("ReduceMin",o,{keepDims:!!h,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,_>>>0)):[]})},853113:(o,h,f,w,_)=>{u.jb("ReduceProd",o,{keepDims:!!h,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,_>>>0)):[]})},853272:(o,h,f,w,_)=>{u.jb("ReduceSum",o,{keepDims:!!h,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,_>>>0)):[]})},853430:(o,h,f,w,_)=>{u.jb("ReduceL1",o,{keepDims:!!h,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,_>>>0)):[]})},853587:(o,h,f,w,_)=>{u.jb("ReduceL2",o,{keepDims:!!h,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,_>>>0)):[]})},853744:(o,h,f,w,_)=>{u.jb("ReduceLogSum",o,{keepDims:!!h,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,_>>>0)):[]})},853905:(o,h,f,w,_)=>{u.jb("ReduceSumSquare",o,{keepDims:!!h,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,_>>>0)):[]})},854069:(o,h,f,w,_)=>{u.jb("ReduceLogSumExp",o,{keepDims:!!h,noopWithEmptyAxes:!!f,axes:w?Array.from(n().subarray(w>>>0,_>>>0)):[]})},854233:o=>{u.jb("Where",o,void 0)},854286:(o,h,f)=>{u.jb("Transpose",o,{perm:h?Array.from(n().subarray(h>>>0,f>>>0)):[]})},854394:(o,h,f,w)=>{u.jb("DepthToSpace",o,{blocksize:h,mode:xe(f),format:w?"NHWC":"NCHW"})},854527:(o,h,f,w)=>{u.jb("DepthToSpace",o,{blocksize:h,mode:xe(f),format:w?"NHWC":"NCHW"})},854660:(o,h,f,w,_,I,A,D,N,V,L,le,de,T,Z)=>{u.jb("ConvTranspose",o,{format:N?"NHWC":"NCHW",autoPad:h,dilations:[f],group:w,kernelShape:[_],pads:[I,A],strides:[D],wIsConst:()=>!!t()[V>>>0],outputPadding:L?Array.from(n().subarray(L>>>0,le>>>0)):[],outputShape:de?Array.from(n().subarray(de>>>0,T>>>0)):[],activation:xe(Z)})},855061:(o,h,f,w,_,I,A,D,N,V,L,le,de,T)=>{u.jb("ConvTranspose",o,{format:D?"NHWC":"NCHW",autoPad:h,dilations:Array.from(n().subarray(f>>>0,2+(f>>>0)>>>0)),group:w,kernelShape:Array.from(n().subarray(_>>>0,2+(_>>>0)>>>0)),pads:Array.from(n().subarray(I>>>0,4+(I>>>0)>>>0)),strides:Array.from(n().subarray(A>>>0,2+(A>>>0)>>>0)),wIsConst:()=>!!t()[N>>>0],outputPadding:V?Array.from(n().subarray(V>>>0,L>>>0)):[],outputShape:le?Array.from(n().subarray(le>>>0,de>>>0)):[],activation:xe(T)})},855626:(o,h,f,w,_,I,A,D,N,V,L,le,de,T,Z)=>{u.jb("ConvTranspose",o,{format:N?"NHWC":"NCHW",autoPad:h,dilations:[f],group:w,kernelShape:[_],pads:[I,A],strides:[D],wIsConst:()=>!!t()[V>>>0],outputPadding:L?Array.from(n().subarray(L>>>0,le>>>0)):[],outputShape:de?Array.from(n().subarray(de>>>0,T>>>0)):[],activation:xe(Z)})},856027:(o,h,f,w,_,I,A,D,N,V,L,le,de,T)=>{u.jb("ConvTranspose",o,{format:D?"NHWC":"NCHW",autoPad:h,dilations:Array.from(n().subarray(f>>>0,2+(f>>>0)>>>0)),group:w,kernelShape:Array.from(n().subarray(_>>>0,2+(_>>>0)>>>0)),pads:Array.from(n().subarray(I>>>0,4+(I>>>0)>>>0)),strides:Array.from(n().subarray(A>>>0,2+(A>>>0)>>>0)),wIsConst:()=>!!t()[N>>>0],outputPadding:V?Array.from(n().subarray(V>>>0,L>>>0)):[],outputShape:le?Array.from(n().subarray(le>>>0,de>>>0)):[],activation:xe(T)})},856592:(o,h)=>{u.jb("GlobalAveragePool",o,{format:h?"NHWC":"NCHW"})},856683:(o,h,f,w,_,I,A,D,N,V,L,le,de,T,Z,he)=>{u.jb("AveragePool",o,{format:he?"NHWC":"NCHW",auto_pad:h,ceil_mode:f,count_include_pad:w,storage_order:_,dilations:[I,A],kernel_shape:[D,N],pads:[V,L,le,de],strides:[T,Z]})},856967:(o,h)=>{u.jb("GlobalAveragePool",o,{format:h?"NHWC":"NCHW"})},857058:(o,h,f,w,_,I,A,D,N,V,L,le,de,T,Z,he)=>{u.jb("AveragePool",o,{format:he?"NHWC":"NCHW",auto_pad:h,ceil_mode:f,count_include_pad:w,storage_order:_,dilations:[I,A],kernel_shape:[D,N],pads:[V,L,le,de],strides:[T,Z]})},857342:(o,h)=>{u.jb("GlobalMaxPool",o,{format:h?"NHWC":"NCHW"})},857429:(o,h,f,w,_,I,A,D,N,V,L,le,de,T,Z,he)=>{u.jb("MaxPool",o,{format:he?"NHWC":"NCHW",auto_pad:h,ceil_mode:f,count_include_pad:w,storage_order:_,dilations:[I,A],kernel_shape:[D,N],pads:[V,L,le,de],strides:[T,Z]})},857709:(o,h)=>{u.jb("GlobalMaxPool",o,{format:h?"NHWC":"NCHW"})},857796:(o,h,f,w,_,I,A,D,N,V,L,le,de,T,Z,he)=>{u.jb("MaxPool",o,{format:he?"NHWC":"NCHW",auto_pad:h,ceil_mode:f,count_include_pad:w,storage_order:_,dilations:[I,A],kernel_shape:[D,N],pads:[V,L,le,de],strides:[T,Z]})},858076:(o,h,f,w,_)=>{u.jb("Gemm",o,{alpha:h,beta:f,transA:w,transB:_})},858180:o=>{u.jb("MatMul",o,void 0)},858234:(o,h,f,w)=>{u.jb("ArgMax",o,{keepDims:!!h,selectLastIndex:!!f,axis:w})},858342:(o,h,f,w)=>{u.jb("ArgMin",o,{keepDims:!!h,selectLastIndex:!!f,axis:w})},858450:(o,h)=>{u.jb("Softmax",o,{axis:h})},858513:(o,h)=>{u.jb("Concat",o,{axis:h})},858573:(o,h,f,w,_)=>{u.jb("Split",o,{axis:h,numOutputs:f,splitSizes:w?Array.from(n().subarray(w>>>0,_>>>0)):[]})},858713:o=>{u.jb("Expand",o,void 0)},858767:(o,h)=>{u.jb("Gather",o,{axis:Number(h)})},858838:(o,h)=>{u.jb("GatherElements",o,{axis:Number(h)})},858917:(o,h,f,w,_,I,A,D,N,V,L)=>{u.jb("Resize",o,{antialias:h,axes:f?Array.from(n().subarray(f>>>0,w>>>0)):[],coordinateTransformMode:xe(_),cubicCoeffA:I,excludeOutside:A,extrapolationValue:D,keepAspectRatioPolicy:xe(N),mode:xe(V),nearestMode:xe(L)})},859263:(o,h,f,w,_,I,A)=>{u.jb("Slice",o,{starts:h?Array.from(n().subarray(h>>>0,f>>>0)):[],ends:w?Array.from(n().subarray(w>>>0,_>>>0)):[],axes:I?Array.from(n().subarray(I>>>0,A>>>0)):[]})},859479:o=>{u.jb("Tile",o,void 0)},859531:(o,h,f)=>{u.jb("InstanceNormalization",o,{epsilon:h,format:f?"NHWC":"NCHW"})},859645:(o,h,f)=>{u.jb("InstanceNormalization",o,{epsilon:h,format:f?"NHWC":"NCHW"})},859759:o=>{u.jb("Range",o,void 0)},859812:(o,h)=>{u.jb("Einsum",o,{equation:xe(h)})},859893:(o,h,f,w,_)=>{u.jb("Pad",o,{mode:h,value:f,pads:w?Array.from(n().subarray(w>>>0,_>>>0)):[]})},860020:(o,h,f,w,_,I)=>{u.jb("BatchNormalization",o,{epsilon:h,momentum:f,spatial:!!_,trainingMode:!!w,format:I?"NHWC":"NCHW"})},860189:(o,h,f,w,_,I)=>{u.jb("BatchNormalization",o,{epsilon:h,momentum:f,spatial:!!_,trainingMode:!!w,format:I?"NHWC":"NCHW"})},860358:(o,h,f)=>{u.jb("CumSum",o,{exclusive:Number(h),reverse:Number(f)})},860455:(o,h,f,w,_,I,A,D,N)=>{u.jb("Attention",o,{numHeads:h,isUnidirectional:f,maskFilterValue:w,scale:_,doRotary:I,qkvHiddenSizes:A?Array.from(n().subarray(Number(D)>>>0,Number(D)+A>>>0)):[],pastPresentShareBuffer:!!N})},860727:o=>{u.jb("BiasAdd",o,void 0)},860782:o=>{u.jb("BiasSplitGelu",o,void 0)},860843:o=>{u.jb("FastGelu",o,void 0)},860899:(o,h,f,w,_,I,A,D,N,V,L,le,de,T,Z,he)=>{u.jb("Conv",o,{format:le?"NHWC":"NCHW",auto_pad:h,dilations:f?Array.from(n().subarray(f>>>0,w>>>0)):[],group:_,kernel_shape:I?Array.from(n().subarray(I>>>0,A>>>0)):[],pads:D?Array.from(n().subarray(D>>>0,N>>>0)):[],strides:V?Array.from(n().subarray(V>>>0,L>>>0)):[],w_is_const:()=>!!t()[de>>>0],activation:xe(T),activation_params:Z?Array.from(l().subarray(Z>>>0,he>>>0)):[]})},861395:o=>{u.jb("Gelu",o,void 0)},861447:(o,h,f,w)=>{u.jb("GroupQueryAttention",o,{numHeads:h,kvNumHeads:f,scale:w})},861560:(o,h,f,w)=>{u.jb("LayerNormalization",o,{axis:h,epsilon:f,simplified:!!w})},861671:(o,h,f,w)=>{u.jb("LayerNormalization",o,{axis:h,epsilon:f,simplified:!!w})},861782:(o,h,f,w,_,I)=>{u.jb("MatMulNBits",o,{k:h,n:f,accuracyLevel:w,bits:_,blockSize:I})},861909:(o,h,f,w,_,I)=>{u.jb("MultiHeadAttention",o,{numHeads:h,isUnidirectional:f,maskFilterValue:w,scale:_,doRotary:I})},862068:(o,h)=>{u.jb("QuickGelu",o,{alpha:h})},862132:(o,h,f,w,_)=>{u.jb("RotaryEmbedding",o,{interleaved:!!h,numHeads:f,rotaryEmbeddingDim:w,scale:_})},862271:(o,h,f)=>{u.jb("SkipLayerNormalization",o,{epsilon:h,simplified:!!f})},862373:o=>{u.Yb(o)},862407:(o,h)=>u.$b(o,h,u.Eb.bc,u.Eb.errors),862519:(o,h,f)=>{u.jb("SkipLayerNormalization",o,{epsilon:h,simplified:!!f})}};function Kh(o,h,f){return wn(async()=>{await u.Wb(o,h,f)})}function Yh(){return typeof wasmOffsetConverter<"u"}function qr(o){this.name="ExitStatus",this.message=`Program terminated with exit(${o})`,this.status=o}var Vr=o=>{o.terminate(),o.onmessage=()=>{}},Na=o=>{at.length==0&&(Ga(),ja(at[0]));var h=at.pop();if(!h)return 6;wt.push(h),Ke[o.Ab]=h,h.Ab=o.Ab;var f={cmd:"run",start_routine:o.cc,arg:o.Pb,pthread_ptr:o.Ab};return h.postMessage(f,o.ic),0},$t=0,ye=(o,h,...f)=>{for(var w=2*f.length,_=oi(),I=si(8*w),A=I>>>3,D=0;D<f.length;D++){var N=f[D];typeof N=="bigint"?(me[A+2*D]=1n,me[A+2*D+1]=N):(me[A+2*D]=0n,d()[A+2*D+1>>>0]=N)}return o=Hn(o,0,w,I,h),pr(_),o};function Hr(o){if(y)return ye(0,1,o);if(oe=o,!(0<$t)){for(var h of wt)Vr(h);for(h of at)Vr(h);at=[],wt=[],Ke=[],Re=!0}C(o,new qr(o))}function Wa(o){if(y)return ye(1,0,o);jr(o)}var jr=o=>{if(oe=o,y)throw Wa(o),"unwind";Hr(o)},at=[],wt=[],qa=[],Ke={},Va=o=>{var h=o.Ab;delete Ke[h],at.push(o),wt.splice(wt.indexOf(o),1),o.Ab=0,ni(h)};function Ha(){qa.forEach(o=>o())}var ja=o=>new Promise(h=>{o.onmessage=_=>{var I=(_=_.data).cmd;if(_.targetThread&&_.targetThread!=Ct()){var A=Ke[_.targetThread];A?A.postMessage(_,_.transferList):Q(`Internal error! Worker sent a message "${I}" to target pthread ${_.targetThread}, but that thread no longer exists!`)}else I==="checkMailbox"?tr():I==="spawnThread"?Na(_):I==="cleanupThread"?Va(Ke[_.thread]):I==="killThread"?(_=_.thread,I=Ke[_],delete Ke[_],Vr(I),ni(_),wt.splice(wt.indexOf(I),1),I.Ab=0):I==="cancelThread"?Ke[_.thread].postMessage({cmd:"cancel"}):I==="loaded"?(o.loaded=!0,h(o)):I==="alert"?alert(`Thread ${_.threadId}: ${_.text}`):_.target==="setimmediate"?o.postMessage(_):I==="callHandler"?u[_.handler](..._.args):I&&Q(`worker sent an unknown command ${I}`)},o.onerror=_=>{throw Q(`worker sent an error! ${_.filename}:${_.lineno}: ${_.message}`),_};var f,w=[];for(f of[])u.hasOwnProperty(f)&&w.push(f);o.postMessage({cmd:"load",handlers:w,wasmMemory:ie,wasmModule:K})});function Ga(){var o=new Worker(new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});at.push(o)}var er=o=>{for(;0<o.length;)o.shift()(u)},Xh=()=>{var o=Ct(),h=s()[o+52>>>2>>>0];o=s()[o+56>>>2>>>0],Gn(h,h-o),pr(h)},Qh=(o,h)=>{$t=0,o=Fn(o,h),0<$t?oe=o:dr(o)};class Zh{constructor(h){this.Ib=h-24}}function Jh(o,h,f){var w=new Zh(o>>>=0);throw h>>>=0,f>>>=0,s()[w.Ib+16>>>2>>>0]=0,s()[w.Ib+4>>>2>>>0]=h,s()[w.Ib+8>>>2>>>0]=f,o}function Fa(o,h,f,w){return y?ye(2,1,o,h,f,w):La(o,h,f,w)}function La(o,h,f,w){if(o>>>=0,h>>>=0,f>>>=0,w>>>=0,x===void 0)return Q("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var _=[];return y&&_.length===0?Fa(o,h,f,w):(o={cc:f,Ab:o,Pb:w,ic:_},y?(o.Lb="spawnThread",postMessage(o,_),0):Na(o))}var Ka=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Ya=(o,h,f)=>{var w=(h>>>=0)+f;for(f=h;o[f]&&!(f>=w);)++f;if(16<f-h&&o.buffer&&Ka)return Ka.decode(o.buffer instanceof x?o.slice(h,f):o.subarray(h,f));for(w="";h<f;){var _=o[h++];if(128&_){var I=63&o[h++];if((224&_)==192)w+=String.fromCharCode((31&_)<<6|I);else{var A=63&o[h++];65536>(_=(240&_)==224?(15&_)<<12|I<<6|A:(7&_)<<18|I<<12|A<<6|63&o[h++])?w+=String.fromCharCode(_):(_-=65536,w+=String.fromCharCode(55296|_>>10,56320|1023&_))}}else w+=String.fromCharCode(_)}return w},xe=(o,h)=>(o>>>=0)?Ya(r(),o,h):"";function Xa(o,h,f){return y?ye(3,1,o,h,f):0}function Qa(o,h){if(y)return ye(4,1,o,h)}var Gr=o=>{for(var h=0,f=0;f<o.length;++f){var w=o.charCodeAt(f);127>=w?h++:2047>=w?h+=2:55296<=w&&57343>=w?(h+=4,++f):h+=3}return h},Za=(o,h,f,w)=>{if(!(0<w))return 0;var _=f>>>=0;w=f+w-1;for(var I=0;I<o.length;++I){var A=o.charCodeAt(I);if(55296<=A&&57343>=A&&(A=65536+((1023&A)<<10)|1023&o.charCodeAt(++I)),127>=A){if(f>=w)break;h[f++>>>0]=A}else{if(2047>=A){if(f+1>=w)break;h[f++>>>0]=192|A>>6}else{if(65535>=A){if(f+2>=w)break;h[f++>>>0]=224|A>>12}else{if(f+3>=w)break;h[f++>>>0]=240|A>>18,h[f++>>>0]=128|A>>12&63}h[f++>>>0]=128|A>>6&63}h[f++>>>0]=128|63&A}}return h[f>>>0]=0,f-_},Et=(o,h,f)=>Za(o,r(),h,f);function Ja(o,h){if(y)return ye(5,1,o,h)}function en(o,h,f){if(y)return ye(6,1,o,h,f)}function tn(o,h,f){return y?ye(7,1,o,h,f):0}function rn(o,h){if(y)return ye(8,1,o,h)}function an(o,h,f){if(y)return ye(9,1,o,h,f)}function nn(o,h,f,w){if(y)return ye(10,1,o,h,f,w)}function sn(o,h,f,w){if(y)return ye(11,1,o,h,f,w)}function on(o,h,f,w){if(y)return ye(12,1,o,h,f,w)}function un(o){if(y)return ye(13,1,o)}function ln(o,h){if(y)return ye(14,1,o,h)}function dn(o,h,f){if(y)return ye(15,1,o,h,f)}var pn,nt,ec=()=>{It("")},Ye=o=>{for(var h="";r()[o>>>0];)h+=pn[r()[o++>>>0]];return h},Fr={},Lr={};function et(o,h,f={}){if(!("argPackAdvance"in h))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(w,_,I={}){var A=_.name;if(!w)throw new nt(`type "${A}" must have a positive integer typeid pointer`);if(Lr.hasOwnProperty(w)){if(I.Rb)return;throw new nt(`Cannot register type '${A}' twice`)}Lr[w]=_,Fr.hasOwnProperty(w)&&(_=Fr[w],delete Fr[w],_.forEach(D=>D()))}(o,h,f)}var hn=(o,h,f)=>{switch(h){case 1:return f?w=>t()[w>>>0]:w=>r()[w>>>0];case 2:return f?w=>i()[w>>>1>>>0]:w=>a()[w>>>1>>>0];case 4:return f?w=>n()[w>>>2>>>0]:w=>s()[w>>>2>>>0];case 8:return f?w=>me[w>>>3]:w=>Be[w>>>3];default:throw new TypeError(`invalid integer width (${h}): ${o}`)}};function tc(o,h,f){f>>>=0,et(o>>>=0,{name:h=Ye(h>>>0),fromWireType:w=>w,toWireType:function(w,_){if(typeof _!="bigint"&&typeof _!="number")throw _=_===null?"null":(w=typeof _)=="object"||w==="array"||w==="function"?_.toString():""+_,new TypeError(`Cannot convert "${_}" to ${this.name}`);return typeof _=="number"&&(_=BigInt(_)),_},argPackAdvance:st,readValueFromPointer:hn(h,f,h.indexOf("u")==-1),Db:null})}var st=8;function rc(o,h,f,w){et(o>>>=0,{name:h=Ye(h>>>0),fromWireType:function(_){return!!_},toWireType:function(_,I){return I?f:w},argPackAdvance:st,readValueFromPointer:function(_){return this.fromWireType(r()[_>>>0])},Db:null})}var Kr=[],tt=[];function Yr(o){9<(o>>>=0)&&--tt[o+1]==0&&(tt[o]=void 0,Kr.push(o))}var De=o=>{if(!o)throw new nt("Cannot use deleted val. handle = "+o);return tt[o]},Me=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let h=Kr.pop()||tt.length;return tt[h]=o,tt[h+1]=1,h}};function Xr(o){return this.fromWireType(s()[o>>>2>>>0])}var ic={name:"emscripten::val",fromWireType:o=>{var h=De(o);return Yr(o),h},toWireType:(o,h)=>Me(h),argPackAdvance:st,readValueFromPointer:Xr,Db:null};function ac(o){return et(o>>>0,ic)}var nc=(o,h)=>{switch(h){case 4:return function(f){return this.fromWireType(l()[f>>>2>>>0])};case 8:return function(f){return this.fromWireType(d()[f>>>3>>>0])};default:throw new TypeError(`invalid float width (${h}): ${o}`)}};function sc(o,h,f){f>>>=0,et(o>>>=0,{name:h=Ye(h>>>0),fromWireType:w=>w,toWireType:(w,_)=>_,argPackAdvance:st,readValueFromPointer:nc(h,f),Db:null})}function oc(o,h,f,w,_){if(o>>>=0,f>>>=0,h=Ye(h>>>0),_===-1&&(_=4294967295),_=D=>D,w===0){var I=32-8*f;_=D=>D<<I>>>I}var A=h.includes("unsigned")?function(D,N){return N>>>0}:function(D,N){return N};et(o,{name:h,fromWireType:_,toWireType:A,argPackAdvance:st,readValueFromPointer:hn(h,f,w!==0),Db:null})}function uc(o,h,f){function w(I){var A=s()[I>>>2>>>0];return I=s()[I+4>>>2>>>0],new _(t().buffer,I,A)}var _=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][h];et(o>>>=0,{name:f=Ye(f>>>0),fromWireType:w,argPackAdvance:st,readValueFromPointer:w},{Rb:!0})}function lc(o,h){o>>>=0;var f=(h=Ye(h>>>0))==="std::string";et(o,{name:h,fromWireType:function(w){var _=s()[w>>>2>>>0],I=w+4;if(f)for(var A=I,D=0;D<=_;++D){var N=I+D;if(D==_||r()[N>>>0]==0){if(A=xe(A,N-A),V===void 0)var V=A;else V+="\0",V+=A;A=N+1}}else{for(V=Array(_),D=0;D<_;++D)V[D]=String.fromCharCode(r()[I+D>>>0]);V=V.join("")}return Qe(w),V},toWireType:function(w,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var I=typeof _=="string";if(!(I||_ instanceof Uint8Array||_ instanceof Uint8ClampedArray||_ instanceof Int8Array))throw new nt("Cannot pass non-string to std::string");var A=f&&I?Gr(_):_.length,D=lr(4+A+1),N=D+4;if(s()[D>>>2>>>0]=A,f&&I)Et(_,N,A+1);else if(I)for(I=0;I<A;++I){var V=_.charCodeAt(I);if(255<V)throw Qe(N),new nt("String has UTF-16 code units that do not fit in 8 bits");r()[N+I>>>0]=V}else for(I=0;I<A;++I)r()[N+I>>>0]=_[I];return w!==null&&w.push(Qe,D),D},argPackAdvance:st,readValueFromPointer:Xr,Db(w){Qe(w)}})}var cn=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,dc=(o,h)=>{for(var f=o>>1,w=f+h/2;!(f>=w)&&a()[f>>>0];)++f;if(32<(f<<=1)-o&&cn)return cn.decode(r().slice(o,f));for(f="",w=0;!(w>=h/2);++w){var _=i()[o+2*w>>>1>>>0];if(_==0)break;f+=String.fromCharCode(_)}return f},pc=(o,h,f)=>{if(f??=2147483647,2>f)return 0;var w=h;f=(f-=2)<2*o.length?f/2:o.length;for(var _=0;_<f;++_){var I=o.charCodeAt(_);i()[h>>>1>>>0]=I,h+=2}return i()[h>>>1>>>0]=0,h-w},hc=o=>2*o.length,cc=(o,h)=>{for(var f=0,w="";!(f>=h/4);){var _=n()[o+4*f>>>2>>>0];if(_==0)break;++f,65536<=_?(_-=65536,w+=String.fromCharCode(55296|_>>10,56320|1023&_)):w+=String.fromCharCode(_)}return w},fc=(o,h,f)=>{if(h>>>=0,f??=2147483647,4>f)return 0;var w=h;f=w+f-4;for(var _=0;_<o.length;++_){var I=o.charCodeAt(_);if(55296<=I&&57343>=I&&(I=65536+((1023&I)<<10)|1023&o.charCodeAt(++_)),n()[h>>>2>>>0]=I,(h+=4)+4>f)break}return n()[h>>>2>>>0]=0,h-w},mc=o=>{for(var h=0,f=0;f<o.length;++f){var w=o.charCodeAt(f);55296<=w&&57343>=w&&++f,h+=4}return h};function gc(o,h,f){if(o>>>=0,h>>>=0,f=Ye(f>>>=0),h===2)var w=dc,_=pc,I=hc,A=D=>a()[D>>>1>>>0];else h===4&&(w=cc,_=fc,I=mc,A=D=>s()[D>>>2>>>0]);et(o,{name:f,fromWireType:D=>{for(var N,V=s()[D>>>2>>>0],L=D+4,le=0;le<=V;++le){var de=D+4+le*h;le!=V&&A(de)!=0||(L=w(L,de-L),N===void 0?N=L:(N+="\0",N+=L),L=de+h)}return Qe(D),N},toWireType:(D,N)=>{if(typeof N!="string")throw new nt(`Cannot pass non-string to C++ string type ${f}`);var V=I(N),L=lr(4+V+h);return s()[L>>>2>>>0]=V/h,_(N,L+4,V+h),D!==null&&D.push(Qe,L),L},argPackAdvance:st,readValueFromPointer:Xr,Db(D){Qe(D)}})}function yc(o,h){et(o>>>=0,{Sb:!0,name:h=Ye(h>>>0),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})}var $c=()=>1;function wc(o){ai(o>>>0,!$,1,!g,131072,!1),Ha()}var fn=o=>{if(!Re)try{if(o(),!(0<$t))try{y?dr(oe):jr(oe)}catch(h){h instanceof qr||h=="unwind"||C(1,h)}}catch(h){h instanceof qr||h=="unwind"||C(1,h)}};function Qr(o){o>>>=0,typeof Atomics.jc=="function"&&(Atomics.jc(n(),o>>>2,o).value.then(tr),o+=128,Atomics.store(n(),o>>>2,1))}var tr=()=>{var o=Ct();o&&(Qr(o),fn(jn))};function bc(o,h){(o>>>=0)==h>>>0?setTimeout(tr):y?postMessage({targetThread:o,cmd:"checkMailbox"}):(o=Ke[o])&&o.postMessage({cmd:"checkMailbox"})}var Zr=[];function _c(o,h,f,w,_){for(h>>>=0,w/=2,Zr.length=w,f=_>>>0>>>3,_=0;_<w;_++)Zr[_]=me[f+2*_]?me[f+2*_+1]:d()[f+2*_+1>>>0];return(h?Wr[h]:pf[o])(...Zr)}function vc(o){o>>>=0,y?postMessage({cmd:"cleanupThread",thread:o}):Va(Ke[o])}function xc(o){}var Jr=(o,h)=>{var f=Lr[o];if(f===void 0)throw o=Wn(o),f=Ye(o),Qe(o),new nt(`${h} has unknown type ${f}`);return f},mn=(o,h,f)=>{var w=[];return o=o.toWireType(w,f),w.length&&(s()[h>>>2>>>0]=Me(w)),o};function Sc(o,h,f){return h>>>=0,f>>>=0,o=De(o>>>0),h=Jr(h,"emval::as"),mn(h,f,o)}var rr=o=>{try{o()}catch(h){It(h)}},ot=0,Xe=null,gn=0,ir=[],yn={},$n={},kc=0,ei=null,Ic=[];function wn(o){return function(h){if(!Re){if(ot===0){var f=!1,w=!1;h((_=0)=>{if(!Re&&(gn=_,f=!0,w)){ot=2,rr(()=>Yn(Xe)),typeof Browser<"u"&&Browser.Jb.Qb&&Browser.Jb.resume(),_=!1;try{var I=function(){var N=n()[Xe+8>>>2>>>0];return N=F[$n[N]],--$t,N()}()}catch(N){I=N,_=!0}var A=!1;if(!Xe){var D=ei;D&&(ei=null,(_?D.reject:D.resolve)(I),A=!0)}if(_&&!A)throw I}}),w=!0,f||(ot=1,Xe=function(){var _=lr(65548),I=_+12;s()[_>>>2>>>0]=I,s()[_+4>>>2>>>0]=I+65536,I=ir[0];var A=yn[I];return A===void 0&&(A=kc++,yn[I]=A,$n[A]=I),I=A,n()[_+8>>>2>>>0]=I,_}(),typeof Browser<"u"&&Browser.Jb.Qb&&Browser.Jb.pause(),rr(()=>Ln(Xe)))}else ot===2?(ot=0,rr(Xn),Qe(Xe),Xe=null,Ic.forEach(fn)):It(`invalid state: ${ot}`);return gn}}(h=>{o().then(h)})}function Ec(o){return o>>>=0,wn(()=>(o=De(o)).then(Me))}var ar=[];function Tc(o,h,f,w){return f>>>=0,w>>>=0,(o=ar[o>>>0])(null,h=De(h>>>0),f,w)}var Cc={},nr=o=>{var h=Cc[o];return h===void 0?Ye(o):h};function zc(o,h,f,w,_){return f>>>=0,w>>>=0,_>>>=0,(o=ar[o>>>0])(h=De(h>>>0),h[f=nr(f)],w,_)}var bn=()=>typeof globalThis=="object"?globalThis:Function("return this")();function Ac(o){return(o>>>=0)==0?Me(bn()):(o=nr(o),Me(bn()[o]))}var Oc=o=>{var h=ar.length;return ar.push(o),h},Rc=(o,h)=>{for(var f=Array(o),w=0;w<o;++w)f[w]=Jr(s()[h+4*w>>>2>>>0],"parameter "+w);return f},_n=(o,h)=>Object.defineProperty(h,"name",{value:o});function Bc(o,h,f){var w=(h=Rc(o,h>>>0)).shift();o--;var _=`return function (obj, func, destructorsRef, args) {
`,I=0,A=[];f===0&&A.push("obj");for(var D=["retType"],N=[w],V=0;V<o;++V)A.push("arg"+V),D.push("argType"+V),N.push(h[V]),_+=`  var arg${V} = argType${V}.readValueFromPointer(args${I?"+"+I:""});
`,I+=h[V].argPackAdvance;return _+=`  var rv = ${f===1?"new func":"func.call"}(${A.join(", ")});
`,w.Sb||(D.push("emval_returnValue"),N.push(mn),_+=`  return emval_returnValue(retType, destructorsRef, rv);
`),D.push(_+`};
`),o=function(L){var le=Function;if(!(le instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof le} which is not a function`);var de=_n(le.name||"unknownFunctionName",function(){});return de.prototype=le.prototype,de=new de,(L=le.apply(de,L))instanceof Object?L:de}(D)(...N),f=`methodCaller<(${h.map(L=>L.name).join(", ")}) => ${w.name}>`,Oc(_n(f,o))}function Dc(o){return o=nr(o>>>0),Me(u[o])}function Mc(o,h){return h>>>=0,o=De(o>>>0),h=De(h),Me(o[h])}function Pc(o){9<(o>>>=0)&&(tt[o+1]+=1)}function Uc(){return Me([])}function Nc(o){o=De(o>>>0);for(var h=Array(o.length),f=0;f<o.length;f++)h[f]=o[f];return Me(h)}function Wc(o){return Me(nr(o>>>0))}function qc(){return Me({})}function Vc(o){for(var h=De(o>>>=0);h.length;){var f=h.pop();h.pop()(f)}Yr(o)}function Hc(o,h,f){h>>>=0,f>>>=0,o=De(o>>>0),h=De(h),f=De(f),o[h]=f}function jc(o,h){return h>>>=0,o=(o=Jr(o>>>0,"_emval_take_value")).readValueFromPointer(h),Me(o)}function Gc(o,h){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),h>>>=0,o=new Date(1e3*o),n()[h>>>2>>>0]=o.getUTCSeconds(),n()[h+4>>>2>>>0]=o.getUTCMinutes(),n()[h+8>>>2>>>0]=o.getUTCHours(),n()[h+12>>>2>>>0]=o.getUTCDate(),n()[h+16>>>2>>>0]=o.getUTCMonth(),n()[h+20>>>2>>>0]=o.getUTCFullYear()-1900,n()[h+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,n()[h+28>>>2>>>0]=o}var Tt=o=>o%4==0&&(o%100!=0||o%400==0),vn=[0,31,60,91,121,152,182,213,244,274,305,335],xn=[0,31,59,90,120,151,181,212,243,273,304,334];function Fc(o,h){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),h>>>=0,o=new Date(1e3*o),n()[h>>>2>>>0]=o.getSeconds(),n()[h+4>>>2>>>0]=o.getMinutes(),n()[h+8>>>2>>>0]=o.getHours(),n()[h+12>>>2>>>0]=o.getDate(),n()[h+16>>>2>>>0]=o.getMonth(),n()[h+20>>>2>>>0]=o.getFullYear()-1900,n()[h+24>>>2>>>0]=o.getDay();var f=(Tt(o.getFullYear())?vn:xn)[o.getMonth()]+o.getDate()-1|0;n()[h+28>>>2>>>0]=f,n()[h+36>>>2>>>0]=-60*o.getTimezoneOffset(),f=new Date(o.getFullYear(),6,1).getTimezoneOffset();var w=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(f!=w&&o.getTimezoneOffset()==Math.min(w,f)),n()[h+32>>>2>>>0]=o}function Lc(o){o>>>=0;var h=new Date(n()[o+20>>>2>>>0]+1900,n()[o+16>>>2>>>0],n()[o+12>>>2>>>0],n()[o+8>>>2>>>0],n()[o+4>>>2>>>0],n()[o>>>2>>>0],0),f=n()[o+32>>>2>>>0],w=h.getTimezoneOffset(),_=new Date(h.getFullYear(),6,1).getTimezoneOffset(),I=new Date(h.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(I,_);return 0>f?n()[o+32>>>2>>>0]=+(_!=I&&A==w):0<f!=(A==w)&&(_=Math.max(I,_),h.setTime(h.getTime()+6e4*((0<f?A:_)-w))),n()[o+24>>>2>>>0]=h.getDay(),f=(Tt(h.getFullYear())?vn:xn)[h.getMonth()]+h.getDate()-1|0,n()[o+28>>>2>>>0]=f,n()[o>>>2>>>0]=h.getSeconds(),n()[o+4>>>2>>>0]=h.getMinutes(),n()[o+8>>>2>>>0]=h.getHours(),n()[o+12>>>2>>>0]=h.getDate(),n()[o+16>>>2>>>0]=h.getMonth(),n()[o+20>>>2>>>0]=h.getYear(),o=h.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function Sn(o,h,f,w,_,I,A){return y?ye(16,1,o,h,f,w,_,I,A):-52}function kn(o,h,f,w,_,I){if(y)return ye(17,1,o,h,f,w,_,I)}function Kc(o,h,f,w){o>>>=0,h>>>=0,f>>>=0,w>>>=0;var _=new Date().getFullYear(),I=new Date(_,0,1),A=new Date(_,6,1);_=I.getTimezoneOffset();var D=A.getTimezoneOffset(),N=Math.max(_,D);s()[o>>>2>>>0]=60*N,n()[h>>>2>>>0]=+(_!=D),I=(o=V=>V.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1])(I),A=o(A),D<_?(Et(I,f,17),Et(A,w,17)):(Et(I,w,17),Et(A,f,17))}var ti=[],In=(o,h)=>{ti.length=0;for(var f;f=r()[o++>>>0];){var w=f!=105;h+=(w&=f!=112)&&h%8?4:0,ti.push(f==112?s()[h>>>2>>>0]:f==106?me[h>>>3]:f==105?n()[h>>>2>>>0]:d()[h>>>3>>>0]),h+=w?8:4}return ti};function Yc(o,h,f){return o>>>=0,h=In(h>>>0,f>>>0),Wr[o](...h)}function Xc(o,h,f){return o>>>=0,h=In(h>>>0,f>>>0),Wr[o](...h)}var Qc=()=>{},Zc=()=>Date.now();function Jc(o,h){return Q(xe(o>>>0,h>>>0))}var En,ef=()=>{throw $t+=1,"unwind"};function tf(){return 4294901760}En=()=>performance.timeOrigin+performance.now();var rf=()=>navigator.hardwareConcurrency;function af(){return It("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function nf(o){o>>>=0;var h=r().length;if(o<=h||4294901760<o)return!1;for(var f=1;4>=f;f*=2){var w=h*(1+.2/f);w=Math.min(w,o+100663296);var _=Math;w=Math.max(o,w);e:{_=(_.min.call(_,4294901760,w+(65536-w%65536)%65536)-ie.buffer.byteLength+65535)/65536;try{ie.grow(_),Ae();var I=1;break e}catch{}I=void 0}if(I)return!0}return!1}var sr=()=>(It("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Ut={},Tn=o=>{o.forEach(h=>{sr()})};function sf(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),Tn(o),Ut.Ob=sr(),Ut.ac=o,Ut.Ob}function of(o,h,f){if(o>>>=0,h>>>=0,Ut.Ob==o)var w=Ut.ac;else(w=Error().stack.toString().split(`
`))[0]=="Error"&&w.shift(),Tn(w);for(var _=3;w[_]&&sr()!=o;)++_;for(o=0;o<f&&w[o+_];++o)n()[h+4*o>>>2>>>0]=sr();return o}var ri,ii={},Cn=()=>{if(!ri){var o,h={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:E};for(o in ii)ii[o]===void 0?delete h[o]:h[o]=ii[o];var f=[];for(o in h)f.push(`${o}=${h[o]}`);ri=f}return ri};function zn(o,h){if(y)return ye(18,1,o,h);o>>>=0,h>>>=0;var f=0;return Cn().forEach((w,_)=>{var I=h+f;for(_=s()[o+4*_>>>2>>>0]=I,I=0;I<w.length;++I)t()[_++>>>0]=w.charCodeAt(I);t()[_>>>0]=0,f+=w.length+1}),0}function An(o,h){if(y)return ye(19,1,o,h);o>>>=0,h>>>=0;var f=Cn();s()[o>>>2>>>0]=f.length;var w=0;return f.forEach(_=>w+=_.length+1),s()[h>>>2>>>0]=w,0}function On(o){return y?ye(20,1,o):52}function Rn(o,h,f,w){return y?ye(21,1,o,h,f,w):52}function Bn(o,h,f,w){return y?ye(22,1,o,h,f,w):70}var uf=[null,[],[]];function Dn(o,h,f,w){if(y)return ye(23,1,o,h,f,w);h>>>=0,f>>>=0,w>>>=0;for(var _=0,I=0;I<f;I++){var A=s()[h>>>2>>>0],D=s()[h+4>>>2>>>0];h+=8;for(var N=0;N<D;N++){var V=r()[A+N>>>0],L=uf[o];V===0||V===10?((o===1?J:Q)(Ya(L,0)),L.length=0):L.push(V)}_+=D}return s()[w>>>2>>>0]=_,0}var Mn=[31,29,31,30,31,30,31,31,30,31,30,31],Pn=[31,28,31,30,31,30,31,31,30,31,30,31],lf=(o,h)=>{t().set(o,h>>>0)};function Un(o,h,f,w){function _(T,Z,he){for(T=typeof T=="number"?T.toString():T||"";T.length<Z;)T=he[0]+T;return T}function I(T,Z){return _(T,Z,"0")}function A(T,Z){function he(Zn){return 0>Zn?-1:0<Zn?1:0}var bt;return(bt=he(T.getFullYear()-Z.getFullYear()))===0&&(bt=he(T.getMonth()-Z.getMonth()))===0&&(bt=he(T.getDate()-Z.getDate())),bt}function D(T){switch(T.getDay()){case 0:return new Date(T.getFullYear()-1,11,29);case 1:return T;case 2:return new Date(T.getFullYear(),0,3);case 3:return new Date(T.getFullYear(),0,2);case 4:return new Date(T.getFullYear(),0,1);case 5:return new Date(T.getFullYear()-1,11,31);case 6:return new Date(T.getFullYear()-1,11,30)}}function N(T){var Z=T.Bb;for(T=new Date(new Date(T.Cb+1900,0,1).getTime());0<Z;){var he=T.getMonth(),bt=(Tt(T.getFullYear())?Mn:Pn)[he];if(!(Z>bt-T.getDate())){T.setDate(T.getDate()+Z);break}Z-=bt-T.getDate()+1,T.setDate(1),11>he?T.setMonth(he+1):(T.setMonth(0),T.setFullYear(T.getFullYear()+1))}return he=new Date(T.getFullYear()+1,0,4),Z=D(new Date(T.getFullYear(),0,4)),he=D(he),0>=A(Z,T)?0>=A(he,T)?T.getFullYear()+1:T.getFullYear():T.getFullYear()-1}o>>>=0,h>>>=0,f>>>=0,w>>>=0;var V=s()[w+40>>>2>>>0];for(var L in w={fc:n()[w>>>2>>>0],ec:n()[w+4>>>2>>>0],Gb:n()[w+8>>>2>>>0],Kb:n()[w+12>>>2>>>0],Hb:n()[w+16>>>2>>>0],Cb:n()[w+20>>>2>>>0],ub:n()[w+24>>>2>>>0],Bb:n()[w+28>>>2>>>0],nc:n()[w+32>>>2>>>0],dc:n()[w+36>>>2>>>0],hc:V?xe(V):""},f=xe(f),V={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})f=f.replace(new RegExp(L,"g"),V[L]);var le="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),de="January February March April May June July August September October November December".split(" ");for(L in V={"%a":T=>le[T.ub].substring(0,3),"%A":T=>le[T.ub],"%b":T=>de[T.Hb].substring(0,3),"%B":T=>de[T.Hb],"%C":T=>I((T.Cb+1900)/100|0,2),"%d":T=>I(T.Kb,2),"%e":T=>_(T.Kb,2," "),"%g":T=>N(T).toString().substring(2),"%G":N,"%H":T=>I(T.Gb,2),"%I":T=>((T=T.Gb)==0?T=12:12<T&&(T-=12),I(T,2)),"%j":T=>{for(var Z=0,he=0;he<=T.Hb-1;Z+=(Tt(T.Cb+1900)?Mn:Pn)[he++]);return I(T.Kb+Z,3)},"%m":T=>I(T.Hb+1,2),"%M":T=>I(T.ec,2),"%n":()=>`
`,"%p":T=>0<=T.Gb&&12>T.Gb?"AM":"PM","%S":T=>I(T.fc,2),"%t":()=>"	","%u":T=>T.ub||7,"%U":T=>I(Math.floor((T.Bb+7-T.ub)/7),2),"%V":T=>{var Z=Math.floor((T.Bb+7-(T.ub+6)%7)/7);if(2>=(T.ub+371-T.Bb-2)%7&&Z++,Z)Z==53&&((he=(T.ub+371-T.Bb)%7)==4||he==3&&Tt(T.Cb)||(Z=1));else{Z=52;var he=(T.ub+7-T.Bb-1)%7;(he==4||he==5&&Tt(T.Cb%400-1))&&Z++}return I(Z,2)},"%w":T=>T.ub,"%W":T=>I(Math.floor((T.Bb+7-(T.ub+6)%7)/7),2),"%y":T=>(T.Cb+1900).toString().substring(2),"%Y":T=>T.Cb+1900,"%z":T=>{var Z=0<=(T=T.dc);return T=Math.abs(T)/60,(Z?"+":"-")+("0000"+(T/60*100+T%60)).slice(-4)},"%Z":T=>T.hc,"%%":()=>"%"},f=f.replace(/%%/g,"\0\0"),V)f.includes(L)&&(f=f.replace(new RegExp(L,"g"),V[L](w)));return L=function(T){var Z=Array(Gr(T)+1);return Za(T,Z,0,Z.length),Z}(f=f.replace(/\0\0/g,"%")),L.length>h?0:(lf(L,o),L.length-1)}function df(o,h,f,w){return Un(o>>>0,h>>>0,f>>>0,w>>>0)}y||function(){for(var o=u.numThreads-1;o--;)Ga();Ee.unshift(()=>{it++,function(h){y?h():Promise.all(at.map(ja)).then(h)}(()=>Ra())})}();for(var Nn=Array(256),or=0;256>or;++or)Nn[or]=String.fromCharCode(or);pn=Nn,nt=u.BindingError=class extends Error{constructor(o){super(o),this.name="BindingError"}},u.InternalError=class extends Error{constructor(o){super(o),this.name="InternalError"}},tt.push(0,1,void 0,1,null,1,!0,1,!1,1),u.count_emval_handles=()=>tt.length/2-5-Kr.length;var pf=[Hr,Wa,Fa,Xa,Qa,Ja,en,tn,rn,an,nn,sn,on,un,ln,dn,Sn,kn,zn,An,On,Rn,Bn,Dn],F=function(){function o(f,w){return F=f.exports,F=function(){var _=F,I={};for(let[A,D]of Object.entries(_))I[A]=typeof D=="function"?(...N)=>{ir.push(A);try{return D(...N)}finally{Re||(ir.pop(),Xe&&ot===1&&ir.length===0&&(ot=0,$t+=1,rr(Kn),typeof Fibers<"u"&&Fibers.oc()))}}:D;return I}(),F=function(){var _=F,I=D=>N=>D(N)>>>0,A=D=>()=>D()>>>0;return(_=Object.assign({},_)).Ca=I(_.Ca),_.fb=A(_.fb),_.gb=I(_.gb),_.emscripten_main_runtime_thread_id=A(_.emscripten_main_runtime_thread_id),_.sb=I(_.sb),_.tb=A(_.tb),_}(),qa.push(F.ib),ke.unshift(F.Ba),K=w,Ra(),F}var h=Ua();if(it++,u.instantiateWasm)try{return u.instantiateWasm(h,o)}catch(f){Q(`Module.instantiateWasm callback failed with error: ${f}`),c(f)}return Nr||=u.locateFile?Ba("ort-wasm-simd-threaded.jsep.wasm")?"ort-wasm-simd-threaded.jsep.wasm":u.locateFile?u.locateFile("ort-wasm-simd-threaded.jsep.wasm",z):z+"ort-wasm-simd-threaded.jsep.wasm":new URL(""+new URL("ort-wasm-simd-threaded.jsep-aobBkcnK.wasm",import.meta.url).href,import.meta.url).href,function(f,w){var _=Nr;return P||typeof WebAssembly.instantiateStreaming!="function"||Ba(_)||Da(_)||typeof fetch!="function"?Pa(_,f,w):fetch(_,{credentials:"same-origin"}).then(I=>WebAssembly.instantiateStreaming(I,f).then(w,function(A){return Q(`wasm streaming compile failed: ${A}`),Q("falling back to ArrayBuffer instantiation"),Pa(_,f,w)}))}(h,function(f){o(f.instance,f.module)}).catch(c),{}}(),Wn=o=>(Wn=F.Ca)(o),qn=()=>(qn=F.Da)();u._OrtInit=(o,h)=>(u._OrtInit=F.Ea)(o,h),u._OrtGetLastError=(o,h)=>(u._OrtGetLastError=F.Fa)(o,h),u._OrtCreateSessionOptions=(o,h,f,w,_,I,A,D,N,V)=>(u._OrtCreateSessionOptions=F.Ga)(o,h,f,w,_,I,A,D,N,V),u._OrtAppendExecutionProvider=(o,h)=>(u._OrtAppendExecutionProvider=F.Ha)(o,h),u._OrtAddFreeDimensionOverride=(o,h,f)=>(u._OrtAddFreeDimensionOverride=F.Ia)(o,h,f),u._OrtAddSessionConfigEntry=(o,h,f)=>(u._OrtAddSessionConfigEntry=F.Ja)(o,h,f),u._OrtReleaseSessionOptions=o=>(u._OrtReleaseSessionOptions=F.Ka)(o),u._OrtCreateSession=(o,h,f)=>(u._OrtCreateSession=F.La)(o,h,f),u._OrtReleaseSession=o=>(u._OrtReleaseSession=F.Ma)(o),u._OrtGetInputOutputCount=(o,h,f)=>(u._OrtGetInputOutputCount=F.Na)(o,h,f),u._OrtGetInputName=(o,h)=>(u._OrtGetInputName=F.Oa)(o,h),u._OrtGetOutputName=(o,h)=>(u._OrtGetOutputName=F.Pa)(o,h),u._OrtFree=o=>(u._OrtFree=F.Qa)(o),u._OrtCreateTensor=(o,h,f,w,_,I)=>(u._OrtCreateTensor=F.Ra)(o,h,f,w,_,I),u._OrtGetTensorData=(o,h,f,w,_)=>(u._OrtGetTensorData=F.Sa)(o,h,f,w,_),u._OrtReleaseTensor=o=>(u._OrtReleaseTensor=F.Ta)(o),u._OrtCreateRunOptions=(o,h,f,w)=>(u._OrtCreateRunOptions=F.Ua)(o,h,f,w),u._OrtAddRunConfigEntry=(o,h,f)=>(u._OrtAddRunConfigEntry=F.Va)(o,h,f),u._OrtReleaseRunOptions=o=>(u._OrtReleaseRunOptions=F.Wa)(o),u._OrtCreateBinding=o=>(u._OrtCreateBinding=F.Xa)(o),u._OrtBindInput=(o,h,f)=>(u._OrtBindInput=F.Ya)(o,h,f),u._OrtBindOutput=(o,h,f,w)=>(u._OrtBindOutput=F.Za)(o,h,f,w),u._OrtClearBoundOutputs=o=>(u._OrtClearBoundOutputs=F._a)(o),u._OrtReleaseBinding=o=>(u._OrtReleaseBinding=F.$a)(o),u._OrtRunWithBinding=(o,h,f,w,_)=>(u._OrtRunWithBinding=F.ab)(o,h,f,w,_),u._OrtRun=(o,h,f,w,_,I,A,D)=>(u._OrtRun=F.bb)(o,h,f,w,_,I,A,D),u._OrtEndProfiling=o=>(u._OrtEndProfiling=F.cb)(o),u._JsepOutput=(o,h,f)=>(u._JsepOutput=F.db)(o,h,f),u._JsepGetNodeName=o=>(u._JsepGetNodeName=F.eb)(o);var ur,Ct=()=>(Ct=F.fb)(),lr=u._malloc=o=>(lr=u._malloc=F.gb)(o),Qe=u._free=o=>(Qe=u._free=F.hb)(o),ai=(o,h,f,w,_,I)=>(ai=F.kb)(o,h,f,w,_,I),Vn=()=>(Vn=F.lb)(),Hn=(o,h,f,w,_)=>(Hn=F.mb)(o,h,f,w,_),ni=o=>(ni=F.nb)(o),dr=o=>(dr=F.ob)(o),jn=()=>(jn=F.pb)(),Gn=(o,h)=>(Gn=F.qb)(o,h),pr=o=>(pr=F.rb)(o),si=o=>(si=F.sb)(o),oi=()=>(oi=F.tb)(),Fn=u.dynCall_ii=(o,h)=>(Fn=u.dynCall_ii=F.vb)(o,h),Ln=o=>(Ln=F.wb)(o),Kn=()=>(Kn=F.xb)(),Yn=o=>(Yn=F.yb)(o),Xn=()=>(Xn=F.zb)();function Qn(){0<it||(y?(p(u),y||er(ke),startWorker(u)):(er(Ee),0<it||ur||(ur=!0,u.calledRun=!0,Re||(y||er(ke),p(u),y||er(rt)))))}return u.___start_em_js=862621,u.___stop_em_js=862843,u.stackSave=()=>oi(),u.stackRestore=o=>pr(o),u.stackAlloc=o=>si(o),u.UTF8ToString=xe,u.stringToUTF8=Et,u.lengthBytesUTF8=Gr,yt=function o(){ur||Qn(),ur||(yt=o)},Qn(),m}),Vl=fi,globalThis.self?.name==="em-pthread"&&fi()}),At,ts,rs,is,mi,Hl,as,jl,Mr=M(()=>{pa(),At=import.meta.url??(typeof document<"u"?document.currentScript?.src:typeof self<"u"?self.location?.href:void 0),ts=typeof location>"u"?void 0:location.origin,rs=(e,t)=>{try{let r=t??At;return(r?new URL(e,r):new URL(e)).origin===ts}catch{return!1}},is=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},mi=(Of(),Ir(Nl)).default,Hl=async()=>{if(!At)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(rs(At))return[void 0,mi()];let e=await is(At);return[e,mi(e)]},as=(Rf(),Ir(ql)).default,jl=async(e,t,r)=>[void 0,as]}),gi,cr,Wt,yi,ns,ss,ha,Se,Mt=M(()=>{Mr(),cr=!1,Wt=!1,yi=!1,ns=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},ss=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ha=async e=>{if(cr)return Promise.resolve();if(Wt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(yi)throw new Error("previous call to 'initializeWebAssembly()' failed.");Wt=!0;let t=e.initTimeout,r=e.numThreads;if(!ss())throw new Error("WebAssembly SIMD is not supported in the current environment.");let i=ns();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let a=e.wasmPaths,n=typeof a=="string"?a:void 0,s=a?.mjs,l=s?.href??s,d=a?.wasm,p=d?.href??d,c=e.wasmBinary,[u,m]=await jl(l,n,r>1),g=!1,$=[];if(t>0&&$.push(new Promise(y=>{setTimeout(()=>{g=!0,y()},t)})),$.push(new Promise((y,x)=>{let v={numThreads:r};c?v.wasmBinary=c:(p||n)&&(v.locateFile=(b,S)=>p??(n??S)+b),m(v).then(b=>{Wt=!1,cr=!0,gi=b,y(),u&&URL.revokeObjectURL(u)},b=>{Wt=!1,yi=!0,x(b)})})),await Promise.race($),g)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},Se=()=>{if(cr&&gi)return gi;throw new Error("WebAssembly is not initialized yet.")}}),Ie,Tr,$e,ca=M(()=>{Mt(),Ie=(e,t)=>{let r=Se(),i=r.lengthBytesUTF8(e)+1,a=r._malloc(i);return r.stringToUTF8(e,a,i),t.push(a),a},Tr=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([a,n])=>{let s=t?t+a:a;if(typeof n=="object")Tr(n,s+".",r,i);else if(typeof n=="string"||typeof n=="number")i(s,n.toString());else if(typeof n=="boolean")i(s,n?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof n}`)})},$e=e=>{let t=Se(),r=t.stackSave();try{let i=t.stackAlloc(8);t._OrtGetLastError(i,i+4);let a=t.HEAP32[i/4],n=t.HEAPU32[i/4+1],s=n?t.UTF8ToString(n):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${s}`)}finally{t.stackRestore(r)}}}),Gl,Bf=M(()=>{Mt(),ca(),Gl=e=>{let t=Se(),r=0,i=[],a=e||{};try{if(e?.logSeverityLevel===void 0)a.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)a.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(a.terminate=!1);let n=0;return e?.tag!==void 0&&(n=Ie(e.tag,i)),r=t._OrtCreateRunOptions(a.logSeverityLevel,a.logVerbosityLevel,!!a.terminate,n),r===0&&$e("Can't create run options."),e?.extra!==void 0&&Tr(e.extra,"",new WeakSet,(s,l)=>{let d=Ie(s,i),p=Ie(l,i);t._OrtAddRunConfigEntry(r,d,p)!==0&&$e(`Can't set a run config entry: ${s} - ${l}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),n}}}),os,us,ls,ds,Fl,Df=M(()=>{Mt(),ca(),os=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},us=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},ls=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},ds=(e,t,r)=>{for(let i of t){let a=typeof i=="string"?i:i.name;switch(a){case"webnn":if(a="WEBNN",typeof i!="string"){let s=i?.deviceType;if(s){let l=Ie("deviceType",r),d=Ie(s,r);Se()._OrtAddSessionConfigEntry(e,l,d)!==0&&$e(`Can't set a session config entry: 'deviceType' - ${s}.`)}}break;case"webgpu":if(a="JS",typeof i!="string"){let s=i;if(s?.preferredLayout){if(s.preferredLayout!=="NCHW"&&s.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${s.preferredLayout}`);let l=Ie("preferredLayout",r),d=Ie(s.preferredLayout,r);Se()._OrtAddSessionConfigEntry(e,l,d)!==0&&$e(`Can't set a session config entry: 'preferredLayout' - ${s.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let n=Ie(a,r);Se()._OrtAppendExecutionProvider(e,n)!==0&&$e(`Can't append execution provider: ${a}.`)}},Fl=e=>{let t=Se(),r=0,i=[],a=e||{};ls(a);try{let n=os(a.graphOptimizationLevel??"all"),s=us(a.executionMode??"sequential"),l=typeof a.logId=="string"?Ie(a.logId,i):0,d=a.logSeverityLevel??2;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log serverity level is not valid: ${d}`);let p=a.logVerbosityLevel??0;if(!Number.isInteger(p)||p<0||p>4)throw new Error(`log verbosity level is not valid: ${p}`);let c=typeof a.optimizedModelFilePath=="string"?Ie(a.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(n,!!a.enableCpuMemArena,!!a.enableMemPattern,s,!!a.enableProfiling,0,l,d,p,c),r===0&&$e("Can't create session options."),a.executionProviders&&ds(r,a.executionProviders,i),a.enableGraphCapture!==void 0){if(typeof a.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${a.enableGraphCapture}`);let u=Ie("enableGraphCapture",i),m=Ie(a.enableGraphCapture.toString(),i);t._OrtAddSessionConfigEntry(r,u,m)!==0&&$e(`Can't set a session config entry: 'enableGraphCapture' - ${a.enableGraphCapture}.`)}if(a.freeDimensionOverrides)for(let[u,m]of Object.entries(a.freeDimensionOverrides)){if(typeof u!="string")throw new Error(`free dimension override name must be a string: ${u}`);if(typeof m!="number"||!Number.isInteger(m)||m<0)throw new Error(`free dimension override value must be a non-negative integer: ${m}`);let g=Ie(u,i);t._OrtAddFreeDimensionOverride(r,g,m)!==0&&$e(`Can't set a free dimension override: ${u} - ${m}.`)}return a.extra!==void 0&&Tr(a.extra,"",new WeakSet,(u,m)=>{let g=Ie(u,i),$=Ie(m,i);t._OrtAddSessionConfigEntry(r,g,$)!==0&&$e(`Can't set a session config entry: ${u} - ${m}.`)}),[r,i]}catch(n){throw r!==0&&t._OrtReleaseSessionOptions(r),i.forEach(s=>t._free(s)),n}}}),Ki,St,Cr,fa,zr,ma,Yi,Y=M(()=>{Ki=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},St=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Cr=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((a,n)=>a*n,1);return r>0?Math.ceil(i*r):void 0},fa=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},zr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},ma=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Yi=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;default:throw new Error(`unsupported data location: ${e}`)}}}),ga,Ll=M(()=>{pa(),ga=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let a=t.body.getReader(),n;try{n=new ArrayBuffer(i)}catch(l){if(l instanceof RangeError){let d=Math.ceil(i/65536);n=new WebAssembly.Memory({initial:d,maximum:d}).buffer}else throw l}let s=0;for(;;){let{done:l,value:d}=await a.read();if(l)break;let p=d.byteLength;new Uint8Array(n,s,p).set(d),s+=p}return new Uint8Array(n,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),ps,hs,cs,fs,Kl,ms,we,mt=M(()=>{Y(),ps=["V","I","W","E","F"],hs=(e,t)=>{console.log(`[${ps[e]},${new Date().toISOString()}]${t}`)},Kl=(e,t)=>{cs=e,fs=t},ms=(e,t)=>{let r=zr(e),i=zr(cs);r>=i&&hs(r,typeof t=="function"?t():t)},we=(...e)=>{fs&&ms(...e)}}),Yl,Mf=M(()=>{Y(),Yl=(e,t)=>new(fa(t))(e)}),ya=M(()=>{}),$i,fr,mr,gs,ys,wi,Xi,$s,Xl,Pf=M(()=>{mt(),ya(),$i=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),fr=[],mr=e=>Math.ceil(e/16)*16,gs=e=>{for(let t=0;t<fr.length;t++){let r=fr[t];if(e<=r)return r}return Math.ceil(e/16)*16},ys=1,wi=()=>ys++,Xi=async(e,t,r,i)=>{let a=mr(r),n=e.device.createBuffer({size:a,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,n,0,a),e.flush(),await n.mapAsync(GPUMapMode.READ);let l=n.getMappedRange();if(i){let d=i();return d.set(new Uint8Array(l,0,r)),d}else return new Uint8Array(l.slice(0,r))}finally{n.destroy()}},$s=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersForUploadingPending=[],this.buffersPending=[],this.externalBuffers=new Map,this.capturedPendingBuffers=new Map;for(let[t]of $i)fr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[])}upload(e,t){let r=t.buffer,i=t.byteOffset,a=t.byteLength,n=mr(a),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(s.originalSize!==a)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${a}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:n,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),d=l.getMappedRange();new Uint8Array(d).set(new Uint8Array(r,i,a)),l.unmap();let p=this.backend.getCommandEncoder();this.backend.endComputePass(),p.copyBufferToBuffer(l,0,s.gpuData.buffer,0,n),we("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`),this.buffersForUploadingPending.push(l)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let a=mr(r.originalSize),n=this.backend.getCommandEncoder();this.backend.endComputePass(),n.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,a)}registerExternalBuffer(e,t,r){let i;if(r){if(i=this.externalBuffers.get(r),i===void 0)throw new Error("previous buffer is not registered");if(e===r)return we("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`);this.externalBuffers.delete(r)}else i=wi();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),this.externalBuffers.set(e,i),we("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){let t=this.externalBuffers.get(e);t!==void 0&&(this.storageCache.delete(t),this.externalBuffers.delete(e),we("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${t}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=gs(e),i,a=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,n=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(a||n){let l=(a?this.freeBuffers:this.freeUniformBuffers).get(r);l?l.length>0?i=l.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:wi(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:e}),we("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=this.storageCache.get(e);if(!t)throw new Error("releasing data does not exist");return we("verbose",()=>`[WebGPU] GpuDataManager.release(id=${e}), gpuDataId=${t.gpuData.id}`),this.storageCache.delete(e),this.buffersPending.push(t.gpuData.buffer),t.originalSize}async download(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("data does not exist");await Xi(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){for(let e of this.buffersForUploadingPending)e.destroy();if(this.buffersForUploadingPending=[],this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=$i.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e))}},Xl=(...e)=>new $s(...e)}),ws,ce,be=M(()=>{ws=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ce=e=>new ws(e)}),bs,Bt,O,Ar,Ql,Zl,Jl,te=M(()=>{bs=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Bt=class{static calcShape(e,t,r=!1){let i=e.length,a=t.length;if(i===0)return t;if(a===0)return e;let n=Math.max(e.length,t.length),s=new Array(n);if(r){if(i<2||a<2)return;let l=bs.calcMatMulShape([e[i-2],e[i-1]],[t[a-2],t[a-1]]);if(l===void 0)return;[s[n-2],s[n-1]]=l}for(let l=r?3:1;l<=n;l++){let d=i-l<0?1:e[i-l],p=a-l<0?1:t[a-l];if(d!==p&&d>1&&p>1)return;let c=Math.max(d,p);if(d&&p)s[n-l]=Math.max(d,p);else{if(c>1)return;s[n-l]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let a=1;a<=r;a++)if(e[r-a]!==1&&e[r-a]!==t[i-a])return!1;return!0}},O=class Sr{static size(t){return Sr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let a=new Array(i),n=i-1;for(;n>=0;){if(t[n]%r===0){a[n]=t[n]/r;break}if(r%t[n]!==0)throw new Error("cannot convert shape");a[n]=1,r/=t[n],n--}for(n--;n>=0;n--)a[n]=t[n];return a}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Sr.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Sr.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let a=1;for(let n=r;n<i;n++){if(t[n]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");a*=t[n]}return a}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let a=r-3;a>=0;--a)i[a]=i[a+1]*t[a+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((a,n)=>a+r[n]+r[n+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,a)=>i===r[a])}},Ar=class Kt{static adjustPoolAttributes(t,r,i,a,n,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let l=0;l<r.length-2;l++)l>=i.length?i.push(r[l+2]):i[l]=r[l+2];for(let l=0;l<i.length;l++)if(l<a.length){if(a[l]<0)throw new Error("strides should be greater than or equal to 1")}else a.push(1);for(let l=0;l<i.length;l++)if(l<n.length){if(n[l]<0)throw new Error("dilations should be greater than or equal to 1")}else n.push(1);for(let l=0;l<i.length*2;l++)if(l<s.length){if(s[l]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let l=0;l<i.length;l++){if(i[l]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[l]>=i[l]||s[l+i.length]>=i[l])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,a,n,s,l){if(l){if(n.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(a.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let d=0;d<t.length-2;d++)Kt.adjustPadAndReturnShape(t[d+(s?1:2)],r[d],i[d],a[d],n,d,d+t.length-2,l)}}static computePoolOutputShape(t,r,i,a,n,s,l,d){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let p=[r[0],r[1]];return Kt.computeShapeHelper(t,r,p,i,a,n,s,l,d),p}static computeConvOutputShape(t,r,i,a,n,s,l){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let d=[t[0],r[0]];return Kt.computeShapeHelper(!1,t,d,i,a,n,s,l),d}static computeShapeHelper(t,r,i,a,n,s,l,d,p){if(t)for(let c=0;c<r.length-2;c++)i.push(1);else for(let c=0;c<r.length-2;c++)i.push(Kt.adjustPadAndReturnShape(r[c+2],a[c],n[c],s[c],l,c,c+r.length-2,d,p))}static adjustPadAndReturnShape(t,r,i,a,n,s,l,d,p){let c=p?Math.ceil:Math.floor,u=i*(a-1)+1;if(d&&d!=="NOTSET")switch(d){case"VALID":return n[s]=0,n[l]=0,Math.floor((t-u)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let m=((t+r-1)/r-1)*r+a-t;return n[s]=Math.floor(d==="SAME_LOWER"?(m+1)/2:m/2),n[l]=m-n[s],c((t+m-a)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return c((t+n[s]+n[l]-u)/r+1)}},Ql=class{static getShapeOfGemmResult(e,t,r,i,a){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let n,s,l;t?(n=e[1],s=e[0]):(n=e[0],s=e[1]);let d=-1;if(i?(l=r[0],d=1):(l=r[1],d=0),r[d]!==s)throw new Error("dimension mismatch");if(n<=0||l<=0||s<=0)throw new Error("invalid shape specified");if(a&&!Bt.isValidBroadcast(a,[n,l]))throw new Error("gemm: invalid bias shape for broadcast");return[n,l,s]}},Zl=-34028234663852886e22,Jl=34028234663852886e22}),Dt,gr,ve,Te,j,_e,kt,Rt,pt,H,yr,B,G,$a,_s,ed,Qt,re=M(()=>{Y(),te(),Dt=64,gr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(e){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},ve=(e,t=1)=>{let r=gr(e,t);return typeof r=="string"?r:r[0]},Te=(e,t=1)=>{let r=gr(e,t);return typeof r=="string"?r:r[1]},j=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:O.computeStrides(r)})}),t},_e=e=>e%4===0?4:e%2===0?2:1,kt=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Rt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,pt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,H=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,yr=(e,t,r,i,a)=>{let n=typeof r=="number",s=n?r:r.length,l=[...new Array(s).keys()],d=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,p=gr(t,a),c=typeof p=="string"?p:p[1],u=typeof p=="string"?p:p[0],m={indices:d,value:c,storage:u,tensor:t},g=R=>typeof R=="string"?R:`${R}u`,$={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},y=n?"uniforms.":"",x=`${y}${e}_shape`,v=`${y}${e}_strides`,b="";for(let R=0;R<s-1;R++)b+=`
    let dim${R} = current / ${H(v,R,s)};
    let rest${R} = current % ${H(v,R,s)};
    indices[${R}] = dim${R};
    current = rest${R};
    `;b+=`indices[${s-1}] = current;`;let S=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${m.indices} {
    var indices: ${m.indices};
    var current = offset;
    ${b}
    return indices;
  }`,k=R=>($.offsetToIndices=!0,s<2?R:`o2i_${e}(${R})`),E=[];if(s>=2)for(let R=s-1;R>=0;R--)E.push(`${H(v,R,s)} * (indices[${R}])`);let C=s<2?"":`
  fn i2o_${e}(indices: ${m.indices}) -> u32 {
    return ${E.join("+")};
  }`,z=R=>($.indicesToOffset=!0,s<2?R:`i2o_${e}(${R})`),P=(...R)=>s===0?"0u":`${m.indices}(${R.map(g).join(",")})`,q=(R,U)=>s<2?`${R}`:`${H(R,U,s)}`,W=(R,U,ee)=>s<2?`${R}=${ee};`:`${H(R,U,s)}=${ee};`,J={},Q=(R,U)=>{$.broadcastedIndicesToOffset=!0;let ee=`${U.name}broadcastedIndicesTo${e}Offset`;if(ee in J)return`${ee}(${R})`;let fe=[];for(let me=s-1;me>=0;me--){let Be=U.indicesGet("outputIndices",me+U.rank-s);fe.push(`${q(v,me)} * (${Be} % ${q(x,me)})`)}return J[ee]=`fn ${ee}(outputIndices: ${U.type.indices}) -> u32 {
             return ${fe.length>0?fe.join("+"):"0u"};
           }`,`${ee}(${R})`},ae=(R,U)=>(()=>{if(m.storage===m.value)return`${e}[${R}]=${U};`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`${e}[${R}]=vec2<u32>(u32(${U}), select(0u, 0xFFFFFFFFu, ${U} < 0));`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`${e}[${R}]=vec2<u32>(u32(${U}), 0u);`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`${e}[${R}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${U}));`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),se=R=>(()=>{if(m.storage===m.value)return`${e}[${R}]`;if(m.storage==="vec2<u32>"&&m.value==="i32")return`i32(${e}[${R}].x)`;if(m.storage==="vec2<u32>"&&m.value==="u32")return`u32(${e}[${R}].x)`;if(m.storage==="u32"&&m.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${R}] & 0xFFu), bool(${e}[${R}] & 0xFF00u), bool(${e}[${R}] & 0xFF0000u), bool(${e}[${R}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${m.storage} and value type ${m.value} yet`)})(),ie=s<2?"":`
  fn get_${e}ByIndices(indices: ${m.indices}) -> ${c} {
    return ${se(`i2o_${e}(indices)`)};
  }`,K=s<2?"":(()=>{let R=l.map(ee=>`d${ee}: u32`).join(", "),U=l.map(ee=>`d${ee}`).join(", ");return`
  fn get_${e}(${R}) -> ${c} {
    return get_${e}ByIndices(${P(U)});
  }`})(),oe=(...R)=>{if(R.length!==s)throw new Error(`indices length must be ${s}`);let U=R.map(g).join(",");return s===0?se("0u"):s===1?se(U[0]):($.get=!0,$.getByIndices=!0,$.indicesToOffset=!0,`get_${e}(${U})`)},pe=R=>s<2?se(R):($.getByIndices=!0,$.indicesToOffset=!0,`get_${e}ByIndices(${R})`),X=s<2?"":`
  fn set_${e}ByIndices(indices: ${m.indices}, value: ${c}) {
    ${ae(`i2o_${e}(indices)`,"value")}
  }`,ne=s<2?"":(()=>{let R=l.map(ee=>`d${ee}: u32`).join(", "),U=l.map(ee=>`d${ee}`).join(", ");return`
  fn set_${e}(${R}, value: ${c}) {
    set_${e}ByIndices(${P(U)}, value);
  }`})();return{impl:()=>{let R=[],U=!1;return $.offsetToIndices&&(R.push(S),U=!0),$.indicesToOffset&&(R.push(C),U=!0),$.broadcastedIndicesToOffset&&(Object.values(J).forEach(ee=>R.push(ee)),U=!0),$.set&&(R.push(ne),U=!0),$.setByIndices&&(R.push(X),U=!0),$.get&&(R.push(K),U=!0),$.getByIndices&&(R.push(ie),U=!0),!n&&U&&R.unshift(`const ${x} = ${m.indices}(${r.join(",")});`,`const ${v} = ${m.indices}(${O.computeStrides(r).join(",")});`),R.join(`
`)},type:m,offsetToIndices:k,indicesToOffset:z,broadcastedIndicesToOffset:Q,indices:P,indicesGet:q,indicesSet:W,set:(...R)=>{if(R.length!==s+1)throw new Error(`indices length must be ${s}`);let U=R[s];if(typeof U!="string")throw new Error("value must be string");let ee=R.slice(0,s).map(g).join(",");return s===0?ae("0u",U):s===1?ae(ee[0],U):($.set=!0,$.setByIndices=!0,$.indicesToOffset=!0,`set_${e}(${ee}, ${U})`)},setByOffset:ae,setByIndices:(R,U)=>s<2?ae(R,U):($.setByIndices=!0,$.indicesToOffset=!0,`set_${e}ByIndices(${R}, ${U});`),get:oe,getByOffset:se,getByIndices:pe,usage:i,name:e,strides:v,shape:x,rank:s}},B=(e,t,r,i=1)=>yr(e,t,r,"input",i),G=(e,t,r,i=1)=>yr(e,t,r,"output",i),$a=(e,t,r,i=1)=>yr(e,t,r,"internal",i),_s=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Dt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let a=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,n=a?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=a?`let global_idx = global_id.x;
         let local_idx = local_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${n}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let a=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${a}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},ed=(e,t)=>new _s(e,t),Qt=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;a++){let n=r-1-a,s=e[n]||1;(t[t.length-1-a]||1)>1&&s===1&&i.unshift(n)}return i}}),vs,bi,xs,Ss,ks,Ze,td,rd,Pt=M(()=>{Y(),te(),be(),re(),vs=e=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.")},bi=(e,t)=>t&&t.length!==e?[...new Array(e).keys()].reverse():t,xs=(e,t)=>O.sortBasedOnPerm(e,bi(e.length,t)),Ss=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},ks=(e,t)=>{let r=[],i=[];for(let a=0;a<e.length;++a)e[a]!==1&&r.push(e[a]),e[t[a]]!==1&&i.push(t[a]);return{newShape:r,newPerm:i}},Ze=(e,t)=>{let r=e.dataType,i=e.dims.length,a=bi(i,t),n=xs(e.dims,a),{newShape:s,newPerm:l}=ks(e.dims,a),d=O.areEqual(l,[2,3,1]),p=O.areEqual(l,[3,1,2]),c=s.length===2&&l[0]>l[1]||d||p,u=c?s:e.dims,m=n;c&&(u=d?[s[0],s[1]*s[2]]:p?[s[0]*s[1],s[2]]:s,m=[u[1],u[0]]);let g=B("a",r,u.length),$=G("output",r,m.length),y=16,x;return c?x=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(g,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${y+1}>, ${y}>;
  ${v.mainStart([y,y,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${y} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${y}u + local_id.x;
    let input_row = workgroup_id_x * ${y}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${g.getByIndices(`${g.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${y}u + local_id.x;
    let output_row = workgroup_id_y * ${y}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`:x=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(g,$)}

  ${Ss(a,i,g,$)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",g.getByIndices("aIndices"))}
  }`,{name:c?"TransposeShared":"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let v=O.size(n);return{outputs:[{dims:n,dataType:e.dataType}],dispatchGroup:c?{x:Math.ceil(m[1]/y),y:Math.ceil(m[0]/y)}:{x:Math.ceil(v/64)},programUniforms:[{type:12,data:v},...j(u,m)]}},getShaderSource:x}},td=(e,t)=>{vs(e.inputs),e.compute(Ze(e.inputs[0],t.perm))},rd=e=>ce({perm:e.perm})}),Is,Es,Ts,Cs,zs,As,Os,Rs,Bs,Ds,We,id,ad,nd,sd,od,ud,ld,dd,pd,hd,Uf=M(()=>{Y(),te(),re(),wa(),Pt(),Is={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Es={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Ts={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Cs={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},zs=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},As=(e,t)=>{let r=[],i=e.length;for(let n=0;n<i;n++)t.indexOf(n)===-1&&r.push(e[n]);let a=t.map(n=>e[n]);return[r,a]},Os=(e,t)=>{let r=e.length+t.length,i=[],a=0;for(let n=0;n<r;n++)t.indexOf(n)===-1?i.push(e[a++]):i.push(1);return i},Rs=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},Bs=(e,t)=>{let r=[];if(!Rs(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},Ds=(e,t,r,i,a,n,s)=>{let l=r[0].dims,d=O.size(n),p=O.size(s),c=B("_A",r[0].dataType,l),u=G("output",a,n),m=32,g=`
          var<workgroup> aBestValues : array<f32, ${m}>;
       `;return{name:e,shaderCache:t,getShaderSource:$=>`
        ${$.registerUniform("reduceSize","u32").declareVariables(c,u)}
        ${g}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${$.mainStart(m)}

          let outputIndex = global_idx / ${m};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Ts[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${m}) {
           let candidate = f32(${c.getByOffset("offset + k")});
           bestValue = ${Is[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${m}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Es[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${u.setByOffset("outputIndex",`${i==="mean"?`${u.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${u.type.storage}(${Cs[i]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:n,dataType:a}],dispatchGroup:{x:d},programUniforms:[{type:12,data:p}]})}},We=(e,t,r,i)=>{let a=e.inputs.length===1?r:Qi(e.inputs,r),n=a.axes;n.length===0&&!a.noopWithEmptyAxes&&(n=e.inputs[0].dims.map((g,$)=>$));let s=O.normalizeAxes(n,e.inputs[0].dims.length),l=s,d=e.inputs[0],p=Bs(l,e.inputs[0].dims.length);p.length>0&&(d=e.compute(Ze(e.inputs[0],p),{inputs:[0],outputs:[-1]})[0],l=zs(l.length,d.dims.length));let[c,u]=As(d.dims,l),m=c;a.keepDims&&(m=Os(c,s)),e.compute(Ds(t,{hint:a.cacheKey,inputDependencies:["type"]},[d],i,e.inputs[0].dataType,m,u),{inputs:[d]})},id=(e,t)=>{We(e,"ReduceMeanShared",t,"mean")},ad=(e,t)=>{We(e,"ReduceL1Shared",t,"l1")},nd=(e,t)=>{We(e,"ReduceL2Shared",t,"l2")},sd=(e,t)=>{We(e,"ReduceLogSumExpShared",t,"logSumExp")},od=(e,t)=>{We(e,"ReduceMaxShared",t,"max")},ud=(e,t)=>{We(e,"ReduceMinShared",t,"min")},ld=(e,t)=>{We(e,"ReduceProdShared",t,"prod")},dd=(e,t)=>{We(e,"ReduceSumShared",t,"sum")},pd=(e,t)=>{We(e,"ReduceSumSquareShared",t,"sumSquare")},hd=(e,t)=>{We(e,"ReduceLogSumShared",t,"logSum")}}),qe,Ms,Or,Qi,Ve,Ps,Us,Ns,Ws,qs,Vs,Hs,js,Gs,Fs,He,cd,fd,md,gd,yd,$d,wd,bd,_d,vd,wa=M(()=>{Y(),te(),be(),re(),Uf(),qe=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Ms=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Or=(e,t,r,i,a,n,s=!1,l=!1)=>{let d=[],p=r[0].dims,c=p.length,u=O.normalizeAxes(a,c),m=!l&&u.length===0;p.forEach((y,x)=>{m||u.indexOf(x)>=0?s&&d.push(1):d.push(y)});let g=d.length,$=O.size(d);return{name:e,shaderCache:t,getShaderSource:y=>{let x=[],v=B("_A",r[0].dataType,c),b=G("output",n,g),S=i(v,b,u),k=S[2];for(let E=0,C=0;E<c;E++)m||u.indexOf(E)>=0?(s&&C++,k=`for(var j${E}: u32 = 0; j${E} < ${p[E]}; j${E}++) {
                  ${S[2].includes("last_index")?`let last_index = j${E};`:""}
                  ${v.indicesSet("input_indices",E,`j${E}`)}
                  ${k}
                }`):(x.push(`${v.indicesSet("input_indices",E,b.indicesGet("output_indices",C))};`),C++);return`

        ${y.registerUniform("output_size","u32").declareVariables(v,b)}

        ${y.mainStart()}
          ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${x.join(`
`)}
          ${S[0]}       // init ops for reduce max/min
          ${S[1]}
          ${k}
          ${S[3]}
          ${S.length===4?b.setByOffset("global_idx","value"):S.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:d,dataType:n}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},...j(p,d)]})}},Qi=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),ce({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ve=(e,t,r,i)=>{let a=e.inputs,n=a.length===1?r:Qi(a,r);e.compute(Or(t,{hint:n.cacheKey,inputDependencies:["rank"]},[a[0]],n.noopWithEmptyAxes&&n.axes.length===0?Ms:i,n.axes,a[0].dataType,n.keepDims,n.noopWithEmptyAxes),{inputs:[0]})},Ps=(e,t)=>{qe(e.inputs),Ve(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},Us=(e,t)=>{qe(e.inputs),Ve(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},Ns=(e,t)=>{qe(e.inputs),Ve(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},Ws=(e,t)=>{qe(e.inputs),Ve(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},qs=(e,t)=>{qe(e.inputs),Ve(e,"ReduceMax",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(r.indicesSet("input_indices",s,0));return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},Vs=(e,t)=>{qe(e.inputs),Ve(e,"ReduceMean",t,(r,i,a)=>{let n=1;for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&(n*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${n});`]})},Hs=(e,t)=>{qe(e.inputs),Ve(e,"ReduceMin",t,(r,i,a)=>{let n=[];for(let s=0;s<r.rank;s++)(a.indexOf(s)>=0||a.length===0)&&n.push(`input_indices[${s}] = 0;`);return[`${n.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},js=(e,t)=>{qe(e.inputs),Ve(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},Gs=(e,t)=>{qe(e.inputs),Ve(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},Fs=(e,t)=>{qe(e.inputs),Ve(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},He=(e,t,r)=>{if(t.length===0)return r;let i=1,a=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?i*=e[n]:a*=e[n];return a<32&&i>1024},cd=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Vs(e,t):id(e,t)},fd=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Us(e,t):ad(e,t)},md=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ns(e,t):nd(e,t)},gd=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ws(e,t):sd(e,t)},yd=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?qs(e,t):od(e,t)},$d=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Hs(e,t):ud(e,t)},wd=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?js(e,t):ld(e,t)},bd=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Gs(e,t):dd(e,t)},_d=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Fs(e,t):pd(e,t)},vd=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ps(e,t):hd(e,t)}}),_i,xd,Sd,Zi,Nf=M(()=>{Y(),be(),wa(),_i=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},xd=(e,t)=>{_i(e.inputs);let r=(i,a,n)=>{let s=[];for(let l=0;l<i.rank;l++)(n.indexOf(l)>=0||n.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Or("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Sd=(e,t)=>{_i(e.inputs);let r=(i,a,n)=>{let s=[];for(let l=0;l<i.rank;l++)(n.indexOf(l)>=0||n.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",a.setByOffset("global_idx","best_index")]};e.compute(Or("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},Zi=e=>ce(e)}),Ls,Ks,Ys,Xs,Zt,Qs,kd,ba=M(()=>{Y(),te(),ya(),re(),Ls=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4],l=e[5];if(s&&l)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let d=r.dims[0],p=r.dims[1],c=r.dims[2];if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==c)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(a.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let u=a.dims[0]/3,m=u,g=m;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let S of t.qkvHiddenSizes)if(S%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");u=t.qkvHiddenSizes[0],m=t.qkvHiddenSizes[1],g=t.qkvHiddenSizes[2]}let $=p;if(u!==m)throw new Error("qkv_hidden_sizes first element should be same as the second");if(a.dims[0]!==u+m+g)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let y=0;if(s){if(m!==g)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==d)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==m/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(y=s.dims[3])}let x=$+y,v=-1,b=0;if(n)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(l){if(l.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[2]!==p||l.dims[3]!==x)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:p,pastSequenceLength:y,kvSequenceLength:$,totalSequenceLength:x,maxSequenceLength:v,inputHiddenSize:c,hiddenSize:u,vHiddenSize:g,headSize:Math.floor(u/t.numHeads),vHeadSize:Math.floor(g/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ks=(e,t,r)=>{let i=_e(r),a=64,n=r/i;n<a&&(a=32);let s=Math.ceil(r/i/a),l=[{type:1,data:1/r},{type:12,data:n},{type:12,data:s}],d=ve(e.dataType,i),p=Te(1,i),c=["type"],u=m=>{let g=G("x",e.dataType,e.dims,i),$=Te(e.dataType),y=[{name:"d_inv",type:"f32"},{name:"d_comp",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${a}>;
  var<workgroup> thread_sum: array<f32, ${a}>;
  ${m.registerUniforms(y).declareVariables(g)}
  ${m.mainStart([a,1,1])}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${a}) * uniforms.d_comp + local_offset;

    var thread_max_vector = ${p}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      thread_max_vector = max(${p}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(i){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${i}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${a}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${p}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      sum_vector += exp(${p}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(i){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${i}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${a}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        x[offset + i] = ${g.type.value}(${$}(uniforms.d_inv));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        var f32input = ${p}(x[offset + i]);
        x[offset + i] = ${g.type.value}(exp(f32input - max_value) / sum);
      }
    }
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${a};${d};${i}`,inputDependencies:c},getShaderSource:u,getRunData:()=>({outputs:[],dispatchGroup:{x:t},programUniforms:l})}},Ys=(e,t,r,i,a,n,s,l)=>{let d=l+n.kvSequenceLength,p=[n.batchSize,n.numHeads,n.sequenceLength,d],c=n.kvNumHeads===void 0&&e>1&&i,u=c?[n.batchSize,n.numHeads,d,n.headSize]:void 0,m=s.scale===0?1/Math.sqrt(n.headSize):s.scale,g=_e(n.headSize),$=n.headSize/g,y=12,x={x:Math.ceil(d/y),y:Math.ceil(n.sequenceLength/y),z:n.batchSize*n.numHeads},v=[{type:12,data:n.sequenceLength},{type:12,data:$},{type:12,data:d},{type:12,data:n.numHeads},{type:1,data:m},{type:12,data:l},{type:12,data:n.kvSequenceLength}],b=c&&i&&O.size(i.dims)>0,S=["type","type"];b&&S.push("type"),a&&S.push("type");let k=[{dims:p,dataType:t.dataType,gpuDataType:0}];c&&k.push({dims:u,dataType:t.dataType,gpuDataType:0});let E=C=>{let z=B("q",t.dataType,t.dims,g),P=B("key",r.dataType,r.dims,g),q=[z,P];if(b){let se=B("past_key",i.dataType,i.dims,g);q.push(se)}a&&q.push(B("attention_bias",a.dataType,a.dims));let W=G("output",t.dataType,p),J=[W];c&&J.push(G("present_key",t.dataType,u,g));let Q=Te(1,g),ae=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${y}u;

  var<workgroup> tileQ: array<${z.type.storage}, ${y*y}>;
  var<workgroup> tileK: array<${z.type.storage}, ${y*y}>;
  ${C.registerUniforms(ae).declareVariables(...q,...J)}
  ${C.mainStart([y,y,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let qOffset = uniforms.M * uniforms.K * headIdx + m * uniforms.K;
    ${b&&c?`
    let kOffset = uniforms.kv_sequence_length * uniforms.K * headIdx;
    let pastKeyOffset = uniforms.past_sequence_length * uniforms.K * headIdx;`:`
    let kOffset = uniforms.N * uniforms.K * headIdx + n * uniforms.K;`}
    ${c?"let presentKeyOffset = headIdx * uniforms.N * uniforms.K;":""}
    var value = ${Q}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${b&&c?`
              if (n + local_id.y < uniforms.past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else {
                tileK[idx] =
                         key[kOffset + (n + local_id.y - uniforms.past_sequence_length) * uniforms.K + w + local_id.x];
              }`:"tileK[idx] = key[kOffset + local_id.y * uniforms.K + w + local_id.x];"}
      ${c?"present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];":""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
        value += ${Q}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    let headOffset = headIdx * uniforms.M * uniforms.N;
    if (global_id.y < uniforms.M && global_id.x < uniforms.N) {
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(g){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${g}`)}})()};
        output[outputIdx] = ${W.type.value} (sum * uniforms.alpha) + ${a?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${g};${a!==void 0};${i!==void 0};${e}`,inputDependencies:S},getRunData:()=>({outputs:k,dispatchGroup:x,programUniforms:v}),getShaderSource:E}},Xs=(e,t,r,i,a,n)=>{let s=n+a.kvSequenceLength,l=a.nReps?a.nReps:1,d=a.vHiddenSize*l,p=a.kvNumHeads==null&&e>1&&i,c=p?[a.batchSize,a.numHeads,s,a.headSize]:void 0,u=[a.batchSize,a.sequenceLength,d],m=12,g={x:Math.ceil(a.vHeadSize/m),y:Math.ceil(a.sequenceLength/m),z:a.batchSize*a.numHeads},$=[{type:12,data:a.sequenceLength},{type:12,data:s},{type:12,data:a.vHeadSize},{type:12,data:a.numHeads},{type:12,data:d},{type:12,data:n},{type:12,data:a.kvSequenceLength}],y=p&&i&&O.size(i.dims)>0,x=["type","type"];y&&x.push("type");let v=[{dims:u,dataType:t.dataType,gpuDataType:0}];p&&v.push({dims:c,dataType:t.dataType,gpuDataType:0});let b=S=>{let k=B("probs",t.dataType,t.dims),E=B("v",r.dataType,r.dims),C=[k,E];y&&C.push(B("past_value",i.dataType,i.dims));let z=[G("output",t.dataType,u)];p&&z.push(G("present_value",t.dataType,c));let P=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${m}u;
  var<workgroup> tileQ: array<${k.type.value}, ${m*m}>;
  var<workgroup> tileK: array<${k.type.value}, ${m*m}>;
  ${S.registerUniforms(P).declareVariables(...C,...z)}
  ${S.mainStart([m,m,1])}
   let headIdx = workgroup_id.z;
   let m = global_id.y;
   let n = global_id.x;

   let offsetA = headIdx * (uniforms.M * uniforms.K) + m * uniforms.K;
   ${y&&p?`
    let pastValueOffset = headIdx * uniforms.N * uniforms.past_sequence_length + n;
    let vOffset = headIdx * uniforms.N * uniforms.kv_sequence_length + n;
      `:`
   let offsetB = headIdx * uniforms.N * uniforms.K + n;
            `}
    ${p?"let presentValueOffset = headIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${k.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${y&&p?`
        if (w + local_id.y < uniforms.past_sequence_length) {
          tileK[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else {
          tileK[idx] = v[vOffset + (w + local_id.y - uniforms.past_sequence_length) * uniforms.N];
        }
      `:`
        tileK[idx] = v[offsetB + (w + local_id.y) * uniforms.N];
      `}
        ${p?"present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileK[idx];":""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let currentBatchHeadNumber = workgroup_id.z % uniforms.num_heads;
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + currentBatchHeadNumber * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:v,dispatchGroup:g,programUniforms:$}),getShaderSource:b}},Zt=(e,t,r,i,a,n,s,l,d,p,c)=>{let u=Math.min(e.outputCount,1+(s?1:0)+(l?1:0)),m=p.kvNumHeads!==void 0||u>1?p.pastSequenceLength:0,g=m+p.kvSequenceLength,$=d&&O.size(d.dims)>0?d:void 0,y=[t,r];p.kvNumHeads===void 0&&u>1&&s&&O.size(s.dims)>0&&y.push(s),$&&y.push($);let x=e.compute(Ys(u,t,r,s,$,p,c,m),{inputs:y,outputs:p.kvNumHeads===void 0&&u>1?[-1,1]:[-1]})[0];e.compute(Ks(x,p.batchSize*p.numHeads*p.sequenceLength,g),{inputs:[x],outputs:[]});let v=[x,i];p.kvNumHeads===void 0&&u>1&&l&&O.size(l.dims)>0&&v.push(l),e.compute(Xs(u,x,i,l,p,m),{inputs:v,outputs:p.kvNumHeads===void 0&&u>1?[0,2]:[0]})},Qs=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,a=t.inputHiddenSize,n=t.headSize,s=12,l={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},d=[e.inputs[0],e.inputs[1],e.inputs[2]],p=[{type:12,data:i},{type:12,data:a},{type:12,data:n},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],c=u=>{let m=G("output_q",d[0].dataType,r),g=G("output_k",d[0].dataType,r),$=G("output_v",d[0].dataType,r),y=B("input",d[0].dataType,d[0].dims),x=B("weight",d[1].dataType,d[1].dims),v=B("bias",d[2].dataType,d[2].dims),b=y.type.storage,S=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${b}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${b}, ${s*s}>;
  var<workgroup> tileWeightK: array<${b}, ${s*s}>;
  var<workgroup> tileWeightV: array<${b}, ${s*s}>;
  ${u.registerUniforms(S).declareVariables(y,x,v,m,g,$)}
  ${u.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:p}),getShaderSource:c},{inputs:d,outputs:[-1,-1,-1]})},kd=(e,t)=>{let r=Ls(e.inputs,t),[i,a,n]=Qs(e,r);return Zt(e,i,a,n,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r,t)}}),Zs,Js,eo,Id,Wf=M(()=>{Le(),Y(),te(),be(),re(),Zs=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,a,n)=>{let s=a.length;if(s!==i.length)throw new Error(`${n}: num dimensions != ${s}`);a.forEach((l,d)=>{if(l!==i[d])throw new Error(`${n}: dim[${d}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},Js=(e,t)=>{let{epsilon:r,spatial:i,format:a}=t,n=e[0].dims,s=i?_e(n[n.length-1]):1,l=a==="NHWC"&&n.length>1?s:1,d=O.size(n)/s,p=i,c=p?n.length:n,u=B("x",e[0].dataType,e[0].dims,s),m=B("scale",e[1].dataType,e[1].dims,l),g=B("bias",e[2].dataType,e[2].dims,l),$=B("inputMean",e[3].dataType,e[3].dims,l),y=B("inputVar",e[4].dataType,e[4].dims,l),x=G("y",e[0].dataType,c,s),v=()=>{let S="";if(i)S=`let cOffset = ${n.length===1?"0u":a==="NHWC"?`outputIndices[${n.length-1}] / ${s}`:"outputIndices[1]"};`;else if(a==="NCHW")S=`
            ${x.indicesSet("outputIndices","0","0")}
            let cOffset = ${x.indicesToOffset("outputIndices")};`;else{S=`var cIndices = ${m.type.indices}(0);
                       cIndices[0] = outputIndices[${n.length-1}];`;for(let k=1;k<m.rank;k++)S+=`cIndices[${k}] = outputIndices[${k}];`;S+=`let cOffset = ${m.indicesToOffset("cIndices")};`}return S},b=S=>`
  const epsilon = ${r};
  ${S.registerUniform("outputSize","u32").declareVariables(u,m,g,$,y,x)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${x.offsetToIndices(`global_idx * ${s}`)};
    ${v()}
    let scale = ${m.getByOffset("cOffset")};
    let bias = ${g.getByOffset("cOffset")};
    let inputMean = ${$.getByOffset("cOffset")};
    let inputVar = ${y.getByOffset("cOffset")};
    let x = ${u.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${x.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:p?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p?[{type:12,data:d},...j(n)]:[{type:12,data:d}]})}},eo=e=>ce(e),Id=(e,t)=>{let{inputs:r,outputCount:i}=e,a=eo({...t,outputCount:i});if(ge.webgpu.validateInputContent&&Zs(r,a),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(Js(r,a))}}),to,ro,Ed,qf=M(()=>{te(),re(),to=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ro=e=>{let t=e[0].dims,r=e[0].dims[2],i=O.size(t)/4,a=e[0].dataType,n=B("input",a,t,4),s=B("bias",a,[r],4),l=B("residual",a,t,4),d=G("output",a,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:p=>`
  const channels = ${r}u / 4;
  ${p.declareVariables(n,s,l,d)}

  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${n.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx","value")}
  }`}},Ed=e=>{to(e.inputs),e.compute(ro(e.inputs))}}),io,ue,Td,Cd,zd,Ad,Od,Rd,Bd,Dd,Md,ao,Pd,Ud,Nd,Wd,Yt,qd,kr,Vd,Hd,jd,Gd,Fd,Ld,Kd,Yd,Xd,Qd,Zd,Jd,ep,tp,rp,ip,vi,ap,Ji,ea,np,sp,op,no,so,up,_a=M(()=>{Y(),te(),be(),re(),io=(e,t,r,i,a,n,s)=>{let l=Math.ceil(t/4),d="";typeof a=="string"?d=`${a}(a)`:d=a("a");let p=B("inputData",r,[l],4),c=G("outputData",i,[l],4),u=[{name:"vec_size",type:"u32"}];return s&&u.push(...s),`
      ${e.registerUniforms(u).declareVariables(p,c)}

  ${n??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${p.getByOffset("global_idx")};
    ${c.setByOffset("global_idx",d)}
  }`},ue=(e,t,r,i,a,n=e.dataType,s,l)=>{let d=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return s&&d.push(...s),{name:t,shaderCache:{hint:a,inputDependencies:["type"]},getShaderSource:p=>io(p,O.size(e.dims),e.dataType,n,r,i,l),getRunData:p=>({outputs:[{dims:e.dims,dataType:n}],dispatchGroup:{x:Math.ceil(O.size(p[0].dims)/64/4)},programUniforms:d})}},Td=e=>{e.compute(ue(e.inputs[0],"Abs","abs"))},Cd=e=>{e.compute(ue(e.inputs[0],"Acos","acos"))},zd=e=>{e.compute(ue(e.inputs[0],"Acosh","acosh"))},Ad=e=>{e.compute(ue(e.inputs[0],"Asin","asin"))},Od=e=>{e.compute(ue(e.inputs[0],"Asinh","asinh"))},Rd=e=>{e.compute(ue(e.inputs[0],"Atan","atan"))},Bd=e=>{e.compute(ue(e.inputs[0],"Atanh","atanh"))},Dd=e=>ce(e),Md=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(ue(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},ao=e=>{let t,r,i=e.length>=2&&e[1].data!==0,a=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=a?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=a?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ce({min:t,max:r})},Pd=(e,t)=>{let r=t||ao(e.inputs),i=Te(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Clip",a=>`clamp(${a}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Ud=e=>{e.compute(ue(e.inputs[0],"Ceil","ceil"))},Nd=e=>{e.compute(ue(e.inputs[0],"Cos","cos"))},Wd=e=>{e.compute(ue(e.inputs[0],"Cosh","cosh"))},Yt=e=>ce(e),qd=(e,t)=>{let r=Te(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},kr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Vd=e=>{let t=Te(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,kr(t)))},Hd=e=>{e.compute(ue(e.inputs[0],"Exp","exp"))},jd=e=>{e.compute(ue(e.inputs[0],"Floor","floor"))},Gd=e=>{let t=Te(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,kr(t)))},Fd=(e,t)=>{let r=Te(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},Ld=e=>{e.compute(ue(e.inputs[0],"Not",t=>`!${t}`))},Kd=e=>{e.compute(ue(e.inputs[0],"Neg",t=>`-${t}`))},Yd=e=>{e.compute(ue(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Xd=e=>{let t=Te(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},Qd=e=>{e.compute(ue(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Zd=e=>ce(e),Jd=(e,t)=>{let r=Te(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},ep=e=>{e.compute(ue(e.inputs[0],"Sin","sin"))},tp=e=>{e.compute(ue(e.inputs[0],"Sinh","sinh"))},rp=e=>{e.compute(ue(e.inputs[0],"Sqrt","sqrt"))},ip=e=>{e.compute(ue(e.inputs[0],"Tan","tan"))},vi=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,ap=e=>{e.compute(ue(e.inputs[0],"Tanh",vi))},Ji=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${vi("v")};
}
`,ea=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,np=e=>{let t=Te(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"FastGelu",ea,Ji(t),void 0,e.inputs[0].dataType))},sp=(e,t)=>{let r=Te(e.inputs[0].dataType);return e.compute(ue(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},op=e=>{e.compute(ue(e.inputs[0],"Log","log"))},no=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,so=e=>`quick_gelu_impl(${e})`,up=(e,t)=>{let r=Te(e.inputs[0].dataType);e.compute(ue(e.inputs[0],"QuickGelu",so,no(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),oo,uo,lp,Vf=M(()=>{te(),re(),_a(),oo=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},uo=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=B("input",e[0].dataType,e[0].dims,4),i=B("bias",e[0].dataType,[e[0].dims[2]],4),a=G("output",e[0].dataType,t,4),n=O.size(t)/4,s=ve(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${l.declareVariables(r,i,a)}

  ${kr(s)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(n)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${a.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},lp=e=>{oo(e.inputs),e.compute(uo(e.inputs))}}),lo,po,je,dp,pp,hp,cp,fp,mp,gp,yp,$p,wp,Hf=M(()=>{Y(),te(),re(),lo=(e,t,r,i,a,n,s,l,d,p,c,u)=>{let m,g;typeof l=="string"?m=g=(b,S)=>`${l}((${b}),(${S}))`:typeof l=="function"?m=g=l:(m=l.scalar,g=l.vector);let $=G("outputData",c,i.length,4),y=B("aData",d,t.length,4),x=B("bData",p,r.length,4),v;if(a)if(n){let b=O.size(t)===1,S=O.size(r)===1,k=t.length>0&&t[t.length-1]%4===0,E=r.length>0&&r[r.length-1]%4===0;b||S?v=$.setByOffset("global_idx",g(b?`${y.type.value}(${y.getByOffset("0")}.x)`:y.getByOffset("global_idx"),S?`${x.type.value}(${x.getByOffset("0")}.x)`:x.getByOffset("global_idx"))):v=`
            let outputIndices = ${$.offsetToIndices("global_idx * 4u")};
            let offsetA = ${y.broadcastedIndicesToOffset("outputIndices",$)};
            let offsetB = ${x.broadcastedIndicesToOffset("outputIndices",$)};
            ${$.setByOffset("global_idx",g(s||k?y.getByOffset("offsetA / 4u"):`${y.type.value}(${y.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||E?x.getByOffset("offsetB / 4u"):`${x.type.value}(${x.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=$.setByOffset("global_idx",g(y.getByOffset("global_idx"),x.getByOffset("global_idx")));else{if(!n)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(S,k,E="")=>{let C=`aData[indexA${k}][componentA${k}]`,z=`bData[indexB${k}][componentB${k}]`;return`
            let outputIndices${k} = ${$.offsetToIndices(`global_idx * 4u + ${k}u`)};
            let offsetA${k} = ${y.broadcastedIndicesToOffset(`outputIndices${k}`,$)};
            let offsetB${k} = ${x.broadcastedIndicesToOffset(`outputIndices${k}`,$)};
            let indexA${k} = offsetA${k} / 4u;
            let indexB${k} = offsetB${k} / 4u;
            let componentA${k} = offsetA${k} % 4u;
            let componentB${k} = offsetB${k} % 4u;
            ${S}[${k}] = ${E}(${m(C,z)});
          `};c===9?v=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(y,x,$)}

        ${u??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},po=(e,t,r,i,a,n,s=r.dataType)=>{let l=!O.areEqual(r.dims,i.dims),d=r.dims,p=O.size(r.dims),c=!1,u=!1,m=[l];if(l){let g=Bt.calcShape(r.dims,i.dims,!1);if(!g)throw new Error("Can't perform binary op on the given tensors");d=g,p=O.size(d);let $=O.size(r.dims)===1,y=O.size(i.dims)===1,x=r.dims.length>0&&r.dims[r.dims.length-1]%4===0,v=i.dims.length>0&&i.dims[i.dims.length-1]%4===0;m.push($),m.push(y),m.push(x),m.push(v);let b=1;for(let S=1;S<d.length;S++){let k=r.dims[r.dims.length-S]??1,E=i.dims[i.dims.length-S]??1;if(k===E)b*=k;else break}b%4===0?(u=!0,c=!0):($||y||x||v)&&(c=!0)}else c=!0;return m.push(c),{name:e,shaderCache:{hint:t+m.map(g=>g.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:g=>lo(g,r.dims,i.dims,d,c,l,u,a,r.dataType,i.dataType,s,n),getRunData:()=>({outputs:[{dims:d,dataType:s}],dispatchGroup:{x:Math.ceil(p/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(d)/4)},...j(r.dims,i.dims,d)]})}},je=(e,t,r,i,a,n)=>{e.compute(po(t,a??"",e.inputs[0],e.inputs[1],r,i,n))},dp=e=>{je(e,"Add",(t,r)=>`${t}+${r}`)},pp=e=>{je(e,"Div",(t,r)=>`${t}/${r}`)},hp=e=>{je(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},cp=e=>{je(e,"Mul",(t,r)=>`${t}*${r}`)},fp=e=>{let t=B("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;je(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},mp=e=>{je(e,"Sub",(t,r)=>`${t}-${r}`)},gp=e=>{je(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},yp=e=>{je(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},$p=e=>{je(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},wp=e=>{je(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),ho,co,fo,mo,bp,_p,jf=M(()=>{Y(),te(),be(),re(),ho=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],a=i.dataType,n=i.dims.length;e.forEach((s,l)=>{if(l!==r){if(s.dataType!==a)throw new Error("input tensors should be one type");if(s.dims.length!==n)throw new Error("input tensors should have the same shape");s.dims.forEach((d,p)=>{if(p!==t&&d!==i.dims[p])throw new Error("non concat dimensions must match")})}})},co=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,fo=(e,t)=>{let r=e.length,i=[];for(let a=0;a<r;++a){let n=t.setByOffset("global_idx",e[a].getByIndices("indices"));r===1?i.push(n):a===0?i.push(`if (inputIndex == ${a}u) { ${n} }`):a===r-1?i.push(`else { ${n} }`):i.push(`else if (inputIndex == ${a}) { ${n} }`)}return i.join(`
`)},mo=(e,t,r,i)=>{let a=O.size(r),n=new Array(e.length),s=new Array(e.length),l=0,d=[],p=[],c=[{type:12,data:a}];for(let y=0;y<e.length;++y)l+=e[y].dims[t],n[y]=l,p.push(e[y].dims.length),s[y]=B(`input${y}`,i,p[y]),d.push("rank"),c.push({type:12,data:n[y]});for(let y=0;y<e.length;++y)c.push(...j(e[y].dims));c.push(...j(r));let u=G("output",i,r.length),m=u.indicesGet("indices",t),g=Array.from(Array(n.length).keys()).map(y=>`uniforms.sizeInConcatAxis${y}`).join(","),$=y=>`

  ${(()=>{y.registerUniform("outputSize","u32");for(let x=0;x<e.length;x++)y.registerUniform(`sizeInConcatAxis${x}`,"u32");return y.declareVariables(...s,u)})()}

  ${co(n.length,g)}

  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${u.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${m});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${n.length}u>(${g});
      ${m} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${fo(s,u)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:$}},bp=(e,t)=>{let r=e.inputs,i=r[0].dims,a=O.normalizeAxis(t.axis,i.length);ho(r,a);let n=i.slice();n[a]=r.reduce((l,d)=>l+(d.dims.length>a?d.dims[a]:0),0);let s=r.filter(l=>O.size(l.dims)>0);e.compute(mo(s,a,n,r[0].dataType),{inputs:s})},_p=e=>ce({axis:e.axis})}),ht,ct,ft,va,gt=M(()=>{Y(),te(),ht=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},ct=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},ft=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},va=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[Zl,Jl];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ce,xa,Pr=M(()=>{Ce=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},xa=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Sa,vp=M(()=>{Sa=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),go,yo,Rr,xi,$o,Br,wo,ka,Ur=M(()=>{Y(),te(),re(),gt(),Pr(),go=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,yo=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Rr=(e,t,r="f32",i,a=!1,n=32,s=!1,l=32)=>{let d=t[1]*e[1],p=t[0]*e[0],c=a?d:n,u=a?n:d,m=c/t[0],g=n/t[1];if(!((a&&m===4&&e[1]===4||!a&&(m===3||m===4))&&c%t[0]===0&&n%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${a} is true, innerElementSize ${m} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${m} must be 3 or 4.
  tileAWidth ${c} must be divisible by workgroupSize[0]${t[0]}. tileInner ${n} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${m}<${r}>, ${c/m}>, ${u}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${p/e[0]}>, ${n}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${m};
const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${d};

  let num_tiles = ${s?`${Math.ceil(l/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${g};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${go(a,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${m===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${yo(a,m)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},xi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,$o=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Br=(e,t,r="f32",i,a=!1,n=32,s=!1,l=32,d=!1)=>{let p=e[1]*t[1],c=e[0]*t[0],u=a?p:n,m=a?n:p;if(!(m%t[1]===0&&u%t[0]===0&&n%t[1]===0))throw new Error(`tileAHight ${m} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${u} must be divisible by workgroupSize[0]${t[0]}, tileInner ${n} must be divisible by workgroupSize[1]${t[1]}`);let g=m/t[1],$=u/t[0],y=n/t[1],x=d?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${p};
    let globalColStart = i32(workgroupId.x) * ${c};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${m}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${u}; inputCol = inputCol + ${t[0]}) {
          ${xi(a,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${n}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${c}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${a?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${p};

let tileRowA = i32(localId.y) * ${g};
let tileColA = i32(localId.x) * ${$};
let tileRowB = i32(localId.y) * ${y};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${g}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${$}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${xi(a,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${y}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${$o(a)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${u}>, ${m}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${c}>, ${n}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${n};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(l/n)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${x}
  }
`},wo=(e,t,r,i,a,n=!1)=>{let[s,l,d]=a,[p,c,u,m]=i,g=Qt(s,d),$=Qt(l,d),y=ve(i[0].type.tensor),x=()=>{let b=c.rank,S=p.rank,k=`var aIndices: ${c.type.indices};`;for(let E=b-2-1,C=S-1;E>=0;E--,C--)k+=`
aIndices[${E}] = ${S>1?`batchIndices[${C}]`:"batchIndices"};`;return g.forEach(E=>{k+=`
aIndices[${E}] = 0;`}),k+=`
aIndices[${b-2}] = u32(row);
                   aIndices[${b-1}] = u32(colIn);`,k},v=()=>{let b=u.rank,S=p.rank,k=`var bIndices: ${u.type.indices};`;for(let E=b-2-1,C=S-1;E>=0;E--,C--)k+=`
bIndices[${E}] = ${S>1?`batchIndices[${C}]`:"batchIndices"};`;return $.forEach(E=>{k+=`
bIndices[${E}] = 0;`}),k+=`
bIndices[${b-2}] = u32(row);
                   bIndices[${b-1}] = u32(colIn);`,k};return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${p.type.indices}) -> ${Ce(e,y)} {
      var value = ${Ce(e,y)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        ${x()}
        value = ${c.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${p.type.indices}) -> ${Ce(e,y)} {
      var value = ${Ce(e,y)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        ${v()}
        value = ${u.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ce(e,y)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Ce(e,y)}(bias[row])`};`:""}
        ${r}
        ${m.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},ka=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,l=e[1].dims,d=s.slice(0,-2),p=l.slice(0,-2),c=i?i.slice(0,-2):r.slice(0,-2),u=O.size(c),m=s[s.length-2],g=s[s.length-1],$=l[l.length-1],y=g%4===0&&$%4===0,x=m<=8?[4,1,1]:[4,4,1],v=[8,8,1],b=[Math.ceil($/v[0]/x[0]),Math.ceil(m/v[1]/x[1]),Math.ceil(u/v[2]/x[2])],S=y?4:1,k=[...d,m,g/S],E=k.length,C=[...p,g,$/S],z=C.length,P=[u,m,$/S],q=[{type:6,data:m},{type:6,data:$},{type:6,data:g}];ct(t,q),q.push(...j(c,k,C));let W=["rank","rank"],J=e.length>2;J&&(q.push(...j(e[2].dims)),W.push("rank")),q.push(...j(P));let Q=ae=>{let se=c.length,ie=$a("batchDims",e[0].dataType,se,1),K=ve(e[0].dataType),oe=B("a",e[0].dataType,E,S),pe=B("b",e[1].dataType,z,S),X=G("result",e[0].dataType,P.length,S),ne=[oe,pe];if(J){let me=a?S:1;ne.push(B("bias",e[2].dataType,e[2].dims.length,me))}let R=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];ft(t,R);let U=ve(X.type.tensor),ee=ht(t,X.type.value,U),fe=wo(S,J,ee,[ie,oe,pe,X],[d,p,c],a);return`
  ${ae.registerUniforms(R).registerInternalVariables(ie).declareVariables(...ne,X)}
  ${fe}
  ${y?Rr(x,v,K,ie):Br(x,v,K,ie)}
                   `};return{name:"MatMul",shaderCache:{hint:`${x};${t.activation};${y};${a}`,inputDependencies:W},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:q}),getShaderSource:Q}}}),bo,xp,Gf=M(()=>{Y(),mt(),re(),gt(),Pr(),vp(),Ur(),bo=(e,t,r,i,a=!1,n,s=4,l=4,d=4,p="f32")=>{let c=q=>{switch(q){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${p}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${q} is not supported.`)}},u=q=>{switch(q){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${q} is not supported.`)}},m=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,g=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,$=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",y=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",x=e?"row":"col",v=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${x} / outWidth;
    let outCol = ${x} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${Ce(s,p)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${$} && xCol >= 0 && xCol < ${y}) {
      ${m}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${c(s)}
    }
    return resData;`,S=e?t&&i?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${Ce(s,p)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${Ce(s,p)}(0.0);`,k=`${u(l)}`,E=Ce(d,p),C=Ce(e?s:l,p),z=Ce(e?l:s,p),P=ht(n,E,p);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${C} {
      ${e?S:k}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?k:S}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${E}) {
      let col = colIn * ${d};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${g}
      ${xa(a)}
      ${P}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},xp=(e,t,r,i,a,n,s,l,d)=>{let p=t.format==="NHWC",c=p?e[0].dims[3]:e[0].dims[1],u=r[0],m=p?r[2]:r[3],g=p?r[1]:r[2],$=p?r[3]:r[1],y=p&&(c%4===0||c%3===0)&&$%4===0,x=p?$:m*g,v=p?m*g:$,b=[8,8,1],S=i<=8?[4,1,1]:[4,4,1],k=[Math.ceil(x/b[0]/S[0]),Math.ceil(v/b[1]/S[1]),Math.ceil(u/b[2]/S[2])];we("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${k}`);let E=y?p&&c%4!==0?3:4:1,C=b[1]*S[1],z=b[0]*S[0],P=Math.max(b[0]*E,b[1]),q=i%C===0,W=a%z===0,J=n%P===0,Q=y?[E,4,4]:[1,1,1],ae=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];ct(t,ae),ae.push(...j(e[0].dims,e[1].dims));let se=["rank","rank"];s&&(ae.push(...j(e[2].dims)),se.push("rank")),ae.push(...j(r));let ie=K=>{let oe=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];ft(t,oe);let pe=y?4:1,X=ve(e[0].dataType),ne=`
      fn setOutputAtIndex(flatIndex : i32, value : ${y?`vec4<${X}>`:X}) {
        result[flatIndex] = ${y?`vec4<${X}>`:X}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${y?`vec4<${X}>`:X}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${y?"/ 4":""}, value);
      }`,R=B("x",e[0].dataType,e[0].dims.length,E===3?1:E),U=B("w",e[1].dataType,e[1].dims.length,pe),ee=[R,U],fe=G("result",e[0].dataType,r.length,pe);if(s){let me=B("bias",e[2].dataType,e[2].dims.length,pe);ee.push(me),ne+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${y?`vec4<${X}>`:X} {
          return bias[coords.${p?"w":"y"}${y?"/ 4":""}];
        }`}return`
        ${Sa("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${K.registerUniforms(oe).declareVariables(...ee,fe)}
        ${ne}
        ${bo(p,q,W,J,s,t,Q[0],Q[1],Q[2],X)}
        ${y?Rr(S,b,X,void 0,!p,P):Br(S,b,X,void 0,!p,P,!1,void 0,l)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${E};${y};${q};${W};${J};${C};${z};${P}`,inputDependencies:se},getRunData:()=>({outputs:[{dims:d?d(r):r,dataType:e[0].dataType}],dispatchGroup:{x:k[0],y:k[1],z:k[2]},programUniforms:ae}),getShaderSource:ie}}}),_o,Si,qt,vo,ki,xo,Sp,kp,Ff=M(()=>{Y(),mt(),te(),re(),gt(),Pr(),_o=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},Si=e=>typeof e=="number"?[e,e,e]:e,qt=(e,t)=>t<=1?e:e+(e-1)*(t-1),vo=(e,t,r,i=1)=>{let a=qt(t,i);return Math.floor((e[0]*(r-1)-r+a)/2)},ki=(e,t,r,i,a)=>{a==null&&(a=vo(e,t[0],i[0]));let n=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*a>=t[s]&&(n[s]=Math.trunc((e[s]-t[s]+2*a)/i[s]+1));return n},xo=(e,t,r,i,a,n,s,l,d,p)=>{let c,u,m,g;if(e==="VALID"&&(e=0),typeof e=="number"){c={top:e,bottom:e,left:e,right:e,front:e,back:e};let $=ki([t,r,i,1],[l,d,p],1,[a,n,s],e);u=$[0],m=$[1],g=$[2]}else if(Array.isArray(e)){if(!e.every((y,x,v)=>y===v[0]))throw Error(`Unsupported padding parameter: ${e}`);c={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let $=ki([t,r,i,1],[l,d,p],1,[a,n,s],e[0]);u=$[0],m=$[1],g=$[2]}else if(e==="SAME_UPPER"){u=Math.ceil(t/a),m=Math.ceil(r/n),g=Math.ceil(i/s);let $=(u-1)*a+l-t,y=(m-1)*n+d-r,x=(g-1)*s+p-i,v=Math.floor($/2),b=$-v,S=Math.floor(y/2),k=y-S,E=Math.floor(x/2),C=x-E;c={top:S,bottom:k,left:E,right:C,front:v,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:c,outDepth:u,outHeight:m,outWidth:g}},Sp=(e,t,r,i,a,n=!1,s="channelsLast")=>{let l,d,p,c,u;if(s==="channelsLast")[l,d,p,c,u]=e;else if(s==="channelsFirst")[l,u,d,p,c]=e;else throw new Error(`Unknown dataFormat ${s}`);let[m,,g,$,y]=t,[x,v,b]=Si(r),[S,k,E]=Si(i),C=qt(g,S),z=qt($,k),P=qt(y,E),{padInfo:q,outDepth:W,outHeight:J,outWidth:Q}=xo(a,d,p,c,x,v,b,C,z,P),ae=n?m*u:m,se=[0,0,0,0,0];return s==="channelsFirst"?se=[l,ae,W,J,Q]:s==="channelsLast"&&(se=[l,W,J,Q,ae]),{batchSize:l,dataFormat:s,inDepth:d,inHeight:p,inWidth:c,inChannels:u,outDepth:W,outHeight:J,outWidth:Q,outChannels:ae,padInfo:q,strideDepth:x,strideHeight:v,strideWidth:b,filterDepth:g,filterHeight:$,filterWidth:y,effectiveFilterDepth:C,effectiveFilterHeight:z,effectiveFilterWidth:P,dilationDepth:S,dilationHeight:k,dilationWidth:E,inShape:e,outShape:se,filterShape:t}},kp=(e,t,r,i,a,n)=>{let s=n==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let l=[64,1,1],d={x:r.map((x,v)=>v)},p=[Math.ceil(_o(d.x.map(x=>r[x]))/l[0]),1,1];we("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${p}`);let c=1,u=O.size(r),m=[{type:12,data:u},{type:12,data:i},{type:12,data:a},{type:12,data:t.strides},{type:12,data:t.dilations}];ct(t,m),m.push(...j(e[0].dims,e[1].dims));let g=["rank","rank"],$=e.length===3;$&&(m.push(...j(e[2].dims)),g.push("rank")),m.push(...j(r));let y=x=>{let v=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:a.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];ft(t,v);let b=1,S=ve(e[0].dataType),k=B("x",e[0].dataType,e[0].dims.length,c),E=B("W",e[1].dataType,e[1].dims.length,b),C=[k,E],z=G("result",e[0].dataType,r.length,b),P="";if($){let J=B("bias",e[2].dataType,e[2].dims.length,b);C.push(J),P+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${S} {
          return bias[${s?H("coords",4,5):H("coords",1,5)}];
        }`}let q=Ce(c,S),W=ht(t,q,S);return`
            ${P}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${k.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
          ${x.registerUniforms(v).declareVariables(...C,z)}
          ${x.mainStart()}
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${z.offsetToIndices("global_idx")};
              let batch = ${H("coords",0,k.rank)};
              let d2 = ${s?H("coords",k.rank-1,k.rank):H("coords",1,k.rank)};
              let xFRCCorner = vec3<u32>(${s?H("coords",1,k.rank):H("coords",2,k.rank)},
              ${s?H("coords",2,k.rank):H("coords",3,k.rank)},
              ${s?H("coords",3,k.rank):H("coords",4,k.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?H("uniforms.x_shape",1,k.rank):H("uniforms.x_shape",2,k.rank)};
              let xShapeZ = ${s?H("uniforms.x_shape",2,k.rank):H("uniforms.x_shape",3,k.rank)};
              let xShapeW = ${s?H("uniforms.x_shape",3,k.rank):H("uniforms.x_shape",4,k.rank)};
              let xShapeU = ${s?H("uniforms.x_shape",4,k.rank):H("uniforms.x_shape",1,k.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${$?"value = value + getBiasByOutputCoords(coords)":""};
              ${W}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${c};${$}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:p[0],y:p[1],z:p[2]},programUniforms:m}),getShaderSource:y}}}),Ip,Ep,Lf=M(()=>{Y(),te(),re(),gt(),Ip=(e,t,r,i)=>{let a=e.length>2,n=a?"value += b[output_channel];":"",s=e[0].dims,l=e[1].dims,d=t.format==="NHWC",p=d?r[3]:r[1],c=p/t.group,u=d&&c>=4?_e(p):1,m=O.size(r)/u,g=[{type:12,data:m},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:c}];ct(t,g),g.push(...j(s,[l[0],l[1],l[2],l[3]/u]));let $=a?["rank","rank","rank"]:["rank","rank"];g.push(...j([r[0],r[1],r[2],r[3]/u]));let y=x=>{let v=G("output",e[0].dataType,r.length,u),b=ve(v.type.tensor),S=ht(t,v.type.value,b),k=B("x",e[0].dataType,s.length),E=B("w",e[1].dataType,l.length,u),C=[k,E];a&&C.push(B("b",e[2].dataType,e[2].dims,u));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];ft(t,z);let P=d?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${k.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${E.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${k.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${E.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${x.registerUniforms(z).declareVariables(...C,v)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${d?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${d?1:2}], outputIndices[${d?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${u} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${d?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${P}
    ${n}
    ${S}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${u}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:y}},Ep=(e,t,r,i)=>{let a=e.length>2,n=_e(r[3]),s=_e(r[2]),l=O.size(r)/n/s,d=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/n],p=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/n],c=[r[0],r[1],r[2],r[3]/n],u=[{type:12,data:l},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];ct(t,u),u.push(...j(d,p,c));let m=(s-1)*t.strides[1]+p[1],g=$=>{let y=G("output",e[0].dataType,c.length,n),x=ve(y.type.tensor),v=ht(t,y.type.value,x),b=B("x",e[0].dataType,d.length,n),S=B("w",e[1].dataType,p.length,n),k=[b,S];a&&k.push(B("b",e[2].dataType,e[2].dims,n));let E=a?"value += b[output_channel];":"",C=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return ft(t,C),`
  ${$.registerUniforms(C).declareVariables(...k,y)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${m}>;
    var values: array<${y.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${p[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${m}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${p[1]}; w_width++) {
          let w_val = ${S.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${E}
      ${v}
      ${y.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${n};${s};${m};${p[0]};${p[1]}`,inputDependencies:a?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:g}}}),ta,So,Tp,Cp=M(()=>{Y(),te(),Ur(),re(),gt(),ta=(e,t,r,i,a=!1,n)=>{let s=e[0].dims,l=e[1].dims,d=s[s.length-2],p=l[l.length-1],c=s[s.length-1],u=_e(p),m=_e(c),g=_e(d),$=O.size(r)/u/g,y=e.length>2,x=i?i.slice(0,-2):r.slice(0,-2),v=[O.size(x),d,p],b=[{type:12,data:$},{type:12,data:d},{type:12,data:p},{type:12,data:c}];ct(t,b),b.push(...j(x,s,l)),y&&b.push(...j(e[2].dims)),b.push(...j(v));let S=k=>{let E=$a("batch_dims",e[0].dataType,x.length),C=B("a",e[0].dataType,s.length,m),z=B("b",e[1].dataType,l.length,u),P=G("output",e[0].dataType,v.length,u),q=ve(P.type.tensor),W=ht(t,P.type.value,q),J=[C,z],Q="";if(y){let ne=a?u:1;J.push(B("bias",e[2].dataType,e[2].dims.length,ne)),Q=`${a?`value += bias[col / ${ne}];`:`value += ${P.type.value}(bias[row + i]);`}`}let ae=s.slice(0,-2),se=l.slice(0,-2),ie=Qt(ae,x),K=Qt(se,x),oe=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];ft(t,oe);let pe=(ne,R)=>{let U=ne.rank,ee=ne.name;if(U===2)return`var ${ee}_indices = ${ne.type.indices}(0u, 0u);`;let fe=E.rank,me=`var ${ee}_indices: ${ne.type.indices};`;for(let Be=U-2-1,Ne=fe-1;Be>=0;Be--,Ne--)me+=`
${ee}_indices[${Be}] = ${fe>1?`batch_indices[${Ne}]`:"batch_indices"};`;return R.forEach(Be=>{me+=`
${ee}_indices[${Be}] = 0;`}),me+=`${ee}_indices[${U-2}] = 0u;
                     ${ee}_indices[${U-1}] = 0u;`,me},X=()=>{let ne=`var a_data: ${C.type.value};`;for(let R=0;R<m;R++)ne+=`
              let b_data${R} = b[(b_offset + (k + ${R}) * uniforms.N + col) / ${u}];`;for(let R=0;R<g;R++){ne+=`a_data = a[(a_offset + (row + ${R}) * uniforms.K + k) / ${m}];`;for(let U=0;U<m;U++)ne+=`
            values[${R}] = fma(${z.type.value}(a_data${m===1?"":`[${U}]`}), b_data${U}, values[${R}]);
`}return ne};return`
  ${k.registerUniforms(oe).registerInternalVariables(E).declareVariables(...J,P)}
  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${u})) * ${u};
    var index1 = global_idx / (uniforms.N / ${u});
    let stride1 = uniforms.M / ${g};
    let row = (index1 % stride1) * ${g};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${E.offsetToIndices("batch")};`}
    ${pe(C,ie)}
    let a_offset = ${C.indicesToOffset("a_indices")};
    ${pe(z,K)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${P.type.value}, ${g}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${m}) {
      ${X()}
    }
    for (var i = 0u; i < ${g}u; i++) {
      var value = values[i];
      ${Q}
      ${W}
      let cur_indices = ${P.type.indices}(batch, row + i, col);
      let offset = ${P.indicesToOffset("cur_indices")};
      ${P.setByOffset(`offset / ${u}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${u};${m};${g};${a}`,inputDependencies:y?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:n?n(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:b}),getShaderSource:S}},So=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Tp=e=>{So(e.inputs);let t=Bt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];r<8&&i<8?e.compute(ta(e.inputs,{activation:""},t)):e.compute(ka(e.inputs,{activation:""},t))}}),ko,$r,Io,wr,ra,Ii,Eo,To,ia,Kf=M(()=>{te(),Gf(),Ff(),Ur(),Lf(),gt(),Cp(),Pt(),ko=(e,t,r,i,a,n)=>{let s=e[0],l=e.slice(n?1:2,n?3:4),d=l.length,p=t[0],c=t.slice(2).map((m,g)=>m+(m-1)*(r[g]-1)),u=l.map((m,g)=>m+i[g]+i[g+d]).map((m,g)=>Math.floor((m-c[g]+a[g])/a[g]));return u.splice(0,0,s),u.splice(n?3:1,0,p),u},$r=[2,3,1,0],Io=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},wr=(e,t)=>{let r=e.kernelShape.slice();for(let n=2;n<t[1].dims.length;++n)r[n-2]===0&&(r[n-2]=t[1].dims[n]);let i=e.pads.slice();Ar.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let a=Object.assign({},e);return Object.assign(a,{kernelShape:r,pads:i}),a},ra=e=>{let t=va(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],a=e.dilations,n=e.group,s=e.kernel_shape,l=e.pads,d=e.strides,p=e.w_is_const();return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Ii=(e,t,r,i)=>{let a=r.format==="NHWC",n=ko(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,a);if(r.group!==1){let C=[t[0]];if(a){let z=e.kernelCustomData.wT??e.compute(Ze(t[1],$r),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),C.push(z)}else C.push(t[1]);t.length===3&&C.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&a&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Ep(C,r,n,i),{inputs:C}):e.compute(Ip(C,r,n,i),{inputs:C});return}let s=t.length===3,l=t[0].dims[a?1:2],d=t[0].dims[a?2:3],p=t[0].dims[a?3:1],c=t[1].dims[2],u=t[1].dims[3],m=n[a?1:2],g=n[a?2:3],$=n[a?3:1],y=a&&c===l&&u===d&&r.pads[0]===0&&r.pads[1]===0;if(y||c===1&&u===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let C=n[0],z,P,q,W=[];if(a){let ae=e.kernelCustomData.wT??e.compute(Ze(t[1],$r),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=ae),y){let se=l*d*p;z=t[0].reshape([1,C,se]),P=ae.reshape([1,se,$]),q=[1,C,$]}else z=t[0].reshape([C,l*d,p]),P=ae.reshape([1,p,$]),q=[C,m*g,$];W.push(z),W.push(P)}else z=t[0].reshape([C,p,l*d]),P=t[1].reshape([1,$,p]),q=[C,$,m*g],W.push(P),W.push(z);s&&W.push(t[2]);let J=q[2],Q=W[0].dims[W[0].dims.length-1];J<8&&Q<8?e.compute(ta(W,r,n,q,a,i),{inputs:W}):e.compute(ka(W,r,n,q,a,i),{inputs:W});return}let x=!0,v=e.kernelCustomData.wT??e.compute(Ze(t[1],$r),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let b=[t[0],v];s&&b.push(t[2]);let S=a?m*g:$,k=a?$:m*g,E=c*u*p;e.compute(xp(b,r,n,S,k,E,s,x,i),{inputs:b})},Eo=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=[0,t.pads[0],0,t.pads[1]],n=[1].concat(t.strides),s=[1].concat(t.dilations),l=[1].concat(t.kernelShape),d=wr({...t,pads:a,strides:n,dilations:s,kernelShape:l},i);Ii(e,i,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},To=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",a=wr(r,t),n=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Sp(t[0].dims,t[1].dims,r.strides,r.dilations,n,!1,i);e.compute(kp(t,a,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},ia=(e,t)=>{if(Io(e.inputs,t),e.inputs[0].dims.length===3)Eo(e,t);else if(e.inputs[0].dims.length===5)To(e,e.inputs,t);else{let r=wr(t,e.inputs);Ii(e,e.inputs,r)}}}),Co,zp,Yf=M(()=>{Y(),mt(),re(),gt(),Pr(),vp(),Ur(),Co=(e,t=!1,r,i,a=4)=>{let n=x=>{switch(x){case 1:return"return w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];";case 4:return`
            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);
            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);
            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);
            let v0 = w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];
            let v1 = w[getIndexFromCoords4D(coord1, vec4<i32>(uniforms.w_shape))];
            let v2 = w[getIndexFromCoords4D(coord2, vec4<i32>(uniforms.w_shape))];
            let v3 = w[getIndexFromCoords4D(coord3, vec4<i32>(uniforms.w_shape))];
            return ${i}(v0, v1, v2, v3);
            `;default:throw new Error(`innerElementSize ${x} is not supported.`)}},s=e?`
      let coord = vec4<i32>(batch, iXR, iXC, xCh);
      `:`
      let coord = vec4<i32>(batch, xCh, iXR, iXC);
      `,l=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,d=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",p=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",c=e?"row":"col",u=e?"col":"row",m=`
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      let outRow = ${c} / outWidth;
      let outCol = ${c} % outWidth;

      let WRow = ${u} / (uniforms.filter_dims[1] * inChannels);
      let WCol = ${u} / inChannels % uniforms.filter_dims[1];
      let xR = f32(outRow - uniforms.pads[0] + uniforms.dilations[0] * WRow) / f32(uniforms.strides[0]);
      let xC = f32(outCol - uniforms.pads[1] + uniforms.dilations[1] * WCol) / f32(uniforms.strides[1]);
      if (xR < 0.0 || xR >= f32(${d}) || fract(xR) > 0.0) {
        return ${i}(0.0);
      }
      if (xC < 0.0 || xC >= f32(${p}) || fract(xC) > 0.0) {
        return ${i}(0.0);
      }
      let iXR = i32(xR);
      let iXC = i32(xC);
      let xCh = ${u} % inChannels;
      ${s}
      return x[getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape))/${a}];`,g=e?`
      let col = colIn * ${a};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
        ${m}
      }
      return ${i}(0.0);`:`
      let col = colIn * ${a};
      if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
        ${m}
      }
      return ${i}(0.0);`,$=`
      let col = colIn * ${a};
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let coordX = uniforms.filter_dims[0] - 1 - row / (uniforms.filter_dims[1] * inChannels);
      let coordY = uniforms.filter_dims[1] - 1 - (row / inChannels) % uniforms.filter_dims[1];
      if (${e?"row < uniforms.dim_inner && col < uniforms.dim_b_outer":"row < uniforms.dim_inner && col < uniforms.dim_a_outer"}  && coordX >= 0 && coordY >= 0) {
        let rowInner = row % inChannels;
        let coord = vec4<i32>(coordX, coordY, col, rowInner);
        ${n(a)}
      }
      return ${i}(0.0);
      `,y=ht(r,i);return`
  fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${i} {
    ${e?g:$}
  }

  fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${i} {
    ${e?$:g}
  }

  fn mm_write(batch: i32, row : i32, colIn : i32, valueInput : ${i}) {
    let col = colIn * ${a};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
      var value = valueInput;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${l}
      ${xa(t)}
      ${y}
      result[getIndexFromCoords4D(coords, vec4<i32>(uniforms.result_shape))/${a}] = value;
    }
  }`},zp=(e,t,r,i,a,n,s,l)=>{let d=t.format==="NHWC",p=d?e[0].dims[3]:e[0].dims[1],c=r[0],u=d?r[2]:r[3],m=d?r[1]:r[2],g=d?r[3]:r[1],$=d&&p%4===0&&p%3&&g%4===0,y=d?g:u*m,x=d?u*m:g,v=[8,8,1],b=i<=8?[4,1,1]:[4,4,1],S=[Math.ceil(y/v[0]/b[0]),Math.ceil(x/v[1]/b[1]),Math.ceil(c/v[2]/b[2])];we("verbose",()=>`[conv_backprop_mm_webgpu] dispatch = ${S}`);let k=$?4:1,E=Math.max(v[0]*k,v[1]),C=$?4:1,z=[t.kernelShape[d?1:2],t.kernelShape[d?2:3]],P=[z[0]+(t.dilations[0]<=1?0:(z[0]-1)*(t.dilations[0]-1)),z[1]+(t.dilations[1]<=1?0:(z[1]-1)*(t.dilations[1]-1))],q=[P[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),P[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],W=[{type:6,data:i},{type:6,data:a},{type:6,data:n},{type:6,data:t.strides},{type:6,data:t.dilations},{type:6,data:z},{type:6,data:q}];ct(t,W),W.push(...j(e[0].dims,e[1].dims));let J=["rank","rank"];s&&(W.push(...j(e[2].dims)),J.push("rank")),W.push(...j(r));let Q=ae=>{let se=B("x",e[0].dataType,e[0].dims.length,C),ie=B("w",e[1].dataType,e[1].dims.length,1),K=G("result",e[0].dataType,r.length,C),oe=[se,ie],pe="";if(s){let R=B("bias",e[2].dataType,e[2].dims.length,C);oe.push(R),pe+=`
          fn getBiasByOutputCoords(coords : vec4<i32>) -> ${R.type.value} {
            return bias[coords.${d?"w":"y"}${$?"/ 4":""}];
          }`}let X=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"strides",type:"i32",length:2},{name:"dilations",type:"i32",length:2},{name:"filter_dims",type:"i32",length:z.length},{name:"pads",type:"i32",length:q.length}];ft(t,X);let ne=ve(e[0].dataType,1);if(ne!=="f16"&&ne!=="f32")throw new Error(`elemType ${ne} is not supported.`);return`
        ${Sa("uniforms.result_strides")}
        ${ae.registerUniforms(X).declareVariables(...oe,K)};
        ${pe}
        ${Co(d,s,t,se.type.value,k)}
        ${$?Rr(b,v,ne,void 0,!d,E):Br(b,v,ne,void 0,!d,E,!1,void 0,l)}`};return{name:"Conv2DTransposeMatMul",shaderCache:{hint:`${t.cacheKey};${b};${v};${$}`,inputDependencies:J},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:S[0],y:S[1],z:S[2]},programUniforms:W}),getShaderSource:Q}}}),zo,aa,Xf=M(()=>{Y(),mt(),te(),re(),zo=(e,t,r,i,a,n=!1,s,l,d=!1)=>{let p=d?1:2,c=d?2:3,u=d?3:1,m=n?2:1,g=`
  fn setOutputAtIndex(flatIndex : u32, value : ${n?`vec4<${s}>`:s}) {
    result[flatIndex] = ${n?`vec4<${s}>`:s}(value);
  }`;i&&(g+=`
    fn getBiasByOutputCoords(coords : vec4<u32>) -> ${n?`vec4<${s}>`:s} {
      return bias[coords.${d?"w":"y"}${n?"/ 4":""}];
    }`);let $=n?4:1,y=B("W",t[1].dataType,t[1].dims.length,$),x=B("Dy",t[0].dataType,t[0].dims.length,$),v=[x,y];i&&v.push(B("bias",t[2].dataType,[r[u]].length,$));let b=G("result",t[0].dataType,r.length,$),S=`{
        let batch: u32 = ${a?"global_id.z":"workgroup_id.z"} / uniforms.result_shape[1];
        let r = ${a?"global_id.z":"workgroup_id.z"} % uniforms.result_shape[1];
        let c = ${a?"global_id.y":"workgroup_id.y"} * ${m};
        let d1: u32 = ${a?"global_id.x":"workgroup_id.x"} * 4;

        let dyCorner = vec2<i32>(i32(r), i32(c)) - vec2<i32>(uniforms.pads);

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        var dotProd: array<vec4<${s}>, ${m}>;
        for (var i = 0; i < ${m}; i++) {
          dotProd[i] = vec4<${s}>(0.0);
        }
        for (var wR: u32 = 0; wR < uniforms.filter_dims[0]; wR = wR + 1) {
          var dyR = (${s}(dyCorner.x) + ${s}(wR)) / ${s}(uniforms.strides.x);
          let wRPerm = uniforms.filter_dims[0] - 1 - wR;
          if (dyR < 0.0 || dyR >= ${s}(uniforms.Dy_shape[1]) ||
              fract(dyR) > 0.0 || wRPerm < 0) {
            continue;
          }
          let idyR: u32 = u32(dyR);

          for (var wC: u32 = 0; wC < uniforms.filter_dims[1]; wC = wC + 1) {
            let dyC = (${s}(dyCorner.y) + ${s}(wC)) / ${s}(uniforms.strides.y);
            let dyC2 = (${s}(dyCorner.y) + 1.0 + ${s}(wC)) / ${s}(uniforms.strides.y);
            let wCPerm = uniforms.filter_dims[1] - 1 - wC;
            if (wCPerm < 0) {
              continue;
            }
            var bDyCVal = true;
            var bDyCVal2 = true;
            if (dyC < 0.0 || dyC >= ${s}(uniforms.Dy_shape[2]) ||
                fract(dyC) > 0.0) {
              bDyCVal = false;
            }
            if (dyC2 < 0.0 || dyC2 >= ${s}(uniforms.Dy_shape[2]) ||
                fract(dyC2) > 0.0) {
              bDyCVal2 = false;
            }

            let idyC: u32 = u32(dyC);
            let idyC2: u32 = u32(dyC2);
            if (bDyCVal && bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2 :u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${x.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${s}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;

                xValue =  ${x.get("batch","idyR","idyC2","d2")};

                dotProd[1] = dotProd[1] + vec4<${s}>(dot(xValue, wValue0),
                                                    dot(xValue, wValue1),
                                                    dot(xValue, wValue2),
                                                    dot(xValue, wValue3));
              }
            } else if (bDyCVal) {
              let d2Length = uniforms.Dy_shape[${u}];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${x.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${s}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;
              }
            } else if (bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${y.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${x.get("batch","idyR","idyC2","d2")};
                let tmpval = vec4<${s}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[1] = dotProd[1] + tmpval;
              }
            }
          }
        }

        for (var i: u32 = 0; i < ${m}; i = i + 1) {
          let value = dotProd[i] + ${i?"bias[c+i]":`vec4<${s}>(0.0)`};
          ${b.set("batch","r","c + i","d1","value")};
        }
      }`,k=`
          let outputIndices = ${b.offsetToIndices("global_idx")};
          let batch = ${b.indicesGet("outputIndices",0)};
          let d1 = ${b.indicesGet("outputIndices",u)};
          let r = ${b.indicesGet("outputIndices",p)};
          let c = ${b.indicesGet("outputIndices",c)};
          let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
          let dyRCorner = dyCorner.x;
          let dyCCorner = dyCorner.y;
          let groupId = d1 / uniforms.output_channels_per_group;
          let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
          // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
          // ? = to be determined. : = across all values in that axis.
          var dotProd = ${s}(0.0);
          for (var wR: u32 = 0; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
            if (wR % uniforms.dilations.x != 0) {
              continue;
            }
            let dyR = (${s}(dyRCorner) + ${s}(wR)) / ${s}(uniforms.strides[0]);
            let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
            if (dyR < 0.0 || dyR >= ${s}(uniforms.Dy_shape[${p}]) || fract(dyR) > 0.0 ||
                wRPerm < 0) {
              continue;
            }
            let idyR: u32 = u32(dyR);

            for (var wC: u32 = 0; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
              if (wC % uniforms.dilations.y != 0) {
                continue;
              }
              let dyC = (${s}(dyCCorner) + ${s}(wC)) / ${s}(uniforms.strides.y);
              let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
              if (dyC < 0.0 || dyC >= ${s}(uniforms.Dy_shape[${c}]) ||
                  fract(dyC) > 0.0 || wCPerm < 0) {
                continue;
              }
              let idyC: u32 = u32(dyC);
              var inputChannel = groupId * uniforms.input_channels_per_group;
              for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + 1) {
                let xValue = ${d?x.get("batch","idyR","idyC","inputChannel"):x.get("batch","inputChannel","idyR","idyC")};
                let wValue = ${y.get("inputChannel","wOutChannel","u32(wRPerm)","u32(wCPerm)")};
                dotProd = dotProd + xValue * wValue;
                inputChannel = inputChannel + 1;
              }
            }
          }
          let value = dotProd + ${i?"bias[d1]":`${s}(0.0)`};
          ${b.setByOffset("global_idx","value")};
        `;return`
  ${e.registerUniforms(l).declareVariables(...v,b)}
  ${g}

    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
  ${n?S:k}}`},aa=(e,t,r)=>{let i=e.length>2,a=t.outputShape,n=O.size(a),s=[Math.ceil(n/64),1,1];we("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${s}`);let l=t.format==="NHWC",d=["rank","rank"],p=[t.strides[0],t.strides[1]],c=[t.kernelShape[l?1:2],t.kernelShape[l?2:3]],u=[t.dilations[0],t.dilations[1]],m=[c[0]+(t.dilations[0]<=1?0:(t.kernelShape[l?1:2]-1)*(t.dilations[0]-1)),c[1]+(t.dilations[1]<=1?0:(t.kernelShape[l?2:3]-1)*(t.dilations[1]-1))],g=[m[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),m[1]-1-Math.floor(t.pads[1]+t.pads[3])/2],$=!1,y=t.group,x=e[1].dims,v=x[0]/y,b=x[1],S=[{type:12,data:n},{type:12,data:p},{type:12,data:c},{type:12,data:u},{type:12,data:m},{type:6,data:g},{type:12,data:v},{type:12,data:b},...j(e[0].dims,e[1].dims)];i&&(S.push(...j(e[2].dims)),d.push("rank")),S.push(...j(a));let k=s[1]===1&&s[2]===1,E=C=>{let z=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:p.length},{name:"filter_dims",type:"u32",length:c.length},{name:"dilations",type:"u32",length:c.length},{name:"effective_filter_dims",type:"u32",length:m.length},{name:"pads",type:"i32",length:g.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],P=ve(e[0].dataType);return`${zo(C,e,a,i,k,$,P,z,l)}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};`,inputDependencies:d},getRunData:()=>({dispatchGroup:{x:s[0],y:s[1],z:s[2]},outputs:[{dims:r?r(a):a,dataType:e[0].dataType}],programUniforms:S}),getShaderSource:E}}}),Ao,Oo,Ro,Ei,Ap,Bo,Do,Mo,Po,Op,Qf=M(()=>{Yf(),Xf(),gt(),Pt(),Ao=(e,t,r,i,a,n)=>(e-1)*t+r+(i-1)*a+1-n,Oo=(e,t,r,i,a)=>{let n=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=n,r[a]=e-n):t==="SAME_LOWER"&&(r[i]=e-n,r[a]=n)},Ro=(e,t,r,i,a,n,s,l,d,p)=>{let c=e.length-2,u=p.length===0;if(d.length===0)for(let $=0;$<c;++$)d.push(0);let m=e[0],g=t[l?3:1]*a;for(let $=0,y=e.length-c-(l?1:0);$<c;++$,++y){let x=e[y],v=u?x*s[$]:p[$],b=Ao(x,s[$],n[$],t[y],r[$],v);Oo(b,i,n,$,$+c),u&&p.push(s[$]*(x-1)+d[$]+(t[y]-1)*r[$]+1-n[$]-n[$+c])}p.splice(0,0,m),p.splice(l?3:1,0,g)},Ei=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((u,m)=>u*m,1)===0){r.length=0;for(let u=2;u<t[1].dims.length;++u)r.push(t[1].dims[u])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let a=e.pads.slice(),n=e.outputShape.slice(),s=e.outputPadding.slice(),l=t[0].dims,d=e.dilations.slice();if(d.reduce((u,m)=>u+m,0)===0){let u=t[0].dims.length-2;d=new Array(u).fill(1)}let p=e.strides.slice();if(p.reduce((u,m)=>u+m,0)===0){let u=t[0].dims.length-2;p=new Array(u).fill(1)}Ro(l,r,d,e.autoPad,e.group,a,p,i,s,n);let c=Object.assign({},e);return Object.assign(c,{kernelShape:r,pads:a,outputPadding:s,outputShape:n,dilations:d,strides:p}),c},Ap=e=>{let t=va(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],a=e.dilations,n=e.group,s=e.kernelShape,l=e.pads,d=e.strides,p=e.wIsConst(),c=e.outputPadding,u=e.outputShape;return{autoPad:i,format:r,dilations:a,group:n,kernelShape:s,outputPadding:c,outputShape:u,pads:l,strides:d,wIsConst:p,...t,cacheKey:`${e.format};${t.activation};`}},Bo=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let a=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==a))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.reduce((s,l)=>s+l,0)>0&&t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.reduce((s,l)=>s+l,0)>0&&t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.reduce((s,l)=>s+l,0)>0&&t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.outputPadding.length!==n&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${n}D`);if(t.kernelShape.reduce((s,l)=>s+l,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Do=[2,3,1,0],Mo=(e,t,r)=>{let i=Ei(r,t),a=r.format==="NHWC",n=i.outputShape,s=n[a?3:1],l=t[0].dims[a?3:1];if(i.group!==1||s===1&&l===1){e.compute(aa(t,i));return}let d=n[a?1:2],p=n[a?2:3],c=t[1].dims[2],u=t[1].dims[3],m=a?d*p:s,g=a?s:d*p,$=c*u*l,y=!0,x=e.kernelCustomData.wT??e.compute(Ze(t[1],Do),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=x);let v=[t[0],x],b=t.length===3;b&&(!a&&t[2].dims.length===1?v.push(t[2].reshape([t[2].dims[0],1,1])):v.push(t[2])),e.compute(zp(v,i,n,m,g,$,b,y),{inputs:v})},Po=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let a=t.kernelShape;(a.length===0||a[0]===0)&&(a=[e.inputs[1].dims[2]]);let n=t.dilations;(n.length===0||n[0]===0)&&(n=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let l=t.pads;l.length===0&&(l=[0,0]),l=[0,l[0],0,l[1]],s=[1].concat(s),n=[1].concat(n),a=[1].concat(a);let d=Ei({...t,pads:l,strides:s,dilations:n,kernelShape:a},i);e.compute(aa(i,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]]))},Op=(e,t)=>{Bo(e.inputs,t),e.inputs[0].dims.length===3?Po(e,t):Mo(e,e.inputs,t)}}),Uo,Rp,Bp,Zf=M(()=>{Y(),te(),be(),re(),Uo=(e,t,r,i)=>{let a=O.size(t),n=t.length,s=B("input",e,n),l=G("output",e,n),d=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),p=O.normalizeAxis(d,n),c=u=>{let m=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,g=H("uniforms.input_shape","uniforms.axis",n),$=i.reverse?m+(i.exclusive?" + 1":""):"0",y=i.reverse?g:m+(i.exclusive?"":" + 1");return`
                ${u.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,l)}
                ${u.mainStart()}
                  ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${l.offsetToIndices("global_idx")};
                  var sum = ${l.type.value}(0);
                  let first : i32 = ${$};
                  let last : i32 = ${y};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${l.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},{type:12,data:p},...j(t,t)]}),getShaderSource:c}},Rp=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,a=e.inputs[1];e.compute(Uo(i,r,a,t),{inputs:[0]})},Bp=e=>{let t=e.exclusive===1,r=e.reverse===1;return ce({exclusive:t,reverse:r})}}),No,Wo,qo,Dp,Mp,Jf=M(()=>{Y(),te(),be(),re(),No=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Wo=(e,t,r,i)=>{let a=[];a.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let n=0;n<t;++n)a.push(r.indicesSet("a",e[n],`i[${n}]`));return a.push("return a;}"),a.join(`
`)},qo=(e,t)=>{let r,i,a,n,s,l,d=t.format==="NHWC",p=t.blocksize,c=t.mode==="DCR";d?([r,i,a,n]=e.dims,s=c?[r,i,a,p,p,n/p**2]:[r,i,a,n/p**2,p,p],l=c?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,a,n]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=c?[r,p,p,n/p**2,i,a]:[r,n/p**2,p,p,i,a],l=c?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let u=e.reshape(s),m=u.dims.length,g=e.dataType,$=B("a",g,m),y=G("output",g,m),x=v=>`
  ${v.registerUniform("output_size","u32").declareVariables($,y)}

  ${Wo(l,m,$,y)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${y.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${y.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let b=d?[r,i*p,a*p,n/p**2]:[r,n/p**2,i*p,a*p],S=O.size(b),k=u.dims,E=O.sortBasedOnPerm(k,l);return{outputs:[{dims:b,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...j(k,E)]}},getShaderSource:x}},Dp=(e,t)=>{No(e.inputs),e.compute(qo(e.inputs[0],t))},Mp=e=>ce({blocksize:e.blocksize,mode:e.mode,format:e.format})}),br,Vt,Ti,Vo,Ho,jo,Go,Ci,Fo,Pp,Up,em=M(()=>{Y(),te(),be(),re(),br="[a-zA-Z]|\\.\\.\\.",Vt="("+br+")+",Ti="^"+Vt+"$",Vo="("+Vt+",)*"+Vt,Ho="^"+Vo+"$",jo=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},Go=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(Ho)))throw new Error("Invalid LHS term");if(r.split(",").forEach((a,n)=>{let s=e[n].dims.slice();if(!a.match(RegExp(Ti)))throw new Error("Invalid LHS term");let l=this.processTerm(a,!0,s,n);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([a,n])=>n.count===1||a==="...").map(([a])=>a).join("");else if(!i.match(RegExp(Vt)))throw new Error("Invalid RHS");i.match(RegExp(br,"g"))?.forEach(a=>{if(a==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let n=this.symbolToInfo.get(a);if(n===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(n.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let a=r.length,n=!1,s=[],l=0;if(!e.match(RegExp(Ti))&&!t&&e!=="")throw new Error("Invalid LHS term");let d=e.match(RegExp(br,"g")),p=new jo(i);return d?.forEach((c,u)=>{if(c==="..."){if(n)throw new Error("Only one ellipsis is allowed per input term");n=!0;let m=a-d.length+1;if(m<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(l,l+m),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let g=0;g<s.length;g++){let $=String.fromCharCode(48+g);p.addSymbol($,u+g),this.addSymbol($,r[l++],i)}}else p.addSymbol(c,u+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(c,r[l++],i)}),p}},Ci=e=>e+"_max",Fo=(e,t,r,i)=>{let a=e.map(p=>p.length).map((p,c)=>B(`input${c}`,t,p)),n=O.size(i),s=G("output",t,i.length),l=[...r.symbolToInfo.keys()].filter(p=>!r.rhs.symbolToIndices.has(p)),d=p=>{let c=[],u="var prod = 1.0;",m="var sum = 0.0;",g="sum += prod;",$=[],y=[],x=[],v=[],b=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((k,E)=>{if(r.rhs.symbolToIndices.has(E)){let C=r.rhs.symbolToIndices.get(E)?.[0];C!==void 0&&r.lhs.forEach((z,P)=>{if(k.inputIndices.includes(P)){let q=z.symbolToIndices.get(E);if(q===void 0)throw new Error("Invalid symbol error");q.forEach(W=>{c.push(`${a[P].indicesSet(`input${P}Indices`,W,s.indicesGet("outputIndices",C))}`)})}})}else r.lhs.forEach((C,z)=>{if(k.inputIndices.includes(z)){let P=C.symbolToIndices.get(E);if(P===void 0)throw new Error("Invalid symbol error");P.forEach(q=>{$.push(`${a[z].indicesSet(`input${z}Indices`,q,`${E}`)}`)}),v.push(`prod *= ${a[z].getByIndices(`input${z}Indices`)};`)}}),y.push(`for(var ${E}: u32 = 0; ${E} < uniforms.${Ci(E)}; ${E}++) {`),x.push("}")});let S=b?[...c,`let sum = ${a.map((k,E)=>k.getByIndices(`input${E}Indices`)).join(" * ")};`]:[...c,m,...y,...$,u,...v,g,...x];return`
            ${p.registerUniforms(l.map(k=>({name:`${Ci(k)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...a,s)}

            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${a.map((k,E)=>`var input${E}Indices: ${a[E].type.indices};`).join(`
`)}
            ${S.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let p=l.filter(u=>r.symbolToInfo.has(u)).map(u=>({type:12,data:r.symbolToInfo.get(u)?.dimValue||0}));p.push({type:12,data:n});let c=e.map((u,m)=>[...j(u)]).reduce((u,m)=>u.concat(m),p);return c.push(...j(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:c}},getShaderSource:d}},Pp=(e,t)=>{let r=new Go(e.inputs,t.equation),i=r.outputDims,a=e.inputs.map((n,s)=>n.dims);e.compute(Fo(a,e.inputs[0].dataType,r,i))},Up=e=>{let t=e.equation.replace(/\s+/g,"");return ce({equation:t})}}),Lo,zi,Ko,Yo,Np,tm=M(()=>{Y(),te(),re(),Lo=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,a=t.length<r.length?0:t.length-r.length;for(;i<r.length&&a<t.length;++i,++a)if(r[i]!==t[a]&&r[i]!==1&&t[a]!==1)throw new Error("Expand requires shape to be broadcastable to input")},zi=(e,t)=>{let r=e.length-t.length,i=[];for(let a=0;a<r;++a)i.push(e[a]);for(let a=0;a<t.length;++a)i.push(t[a]===1?e[a+r]:t[a]);return i},Ko=(e,t)=>e.length>t.length?zi(e,t):zi(t,e),Yo=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=Ko(t,r),a=e[0].dataType,n=a===9?4:1,s=Math.ceil(O.size(i)/n),l=p=>{let c=B("input",a,t.length,n),u=G("output",a,i.length,n),m;if(a===9){let g=($,y,x="")=>`
          let outputIndices${y} = ${u.offsetToIndices(`outputOffset + ${y}u`)};
          let offset${y} = ${c.broadcastedIndicesToOffset(`outputIndices${y}`,u)};
          let index${y} = offset${y} / 4u;
          let component${y} = offset${y} % 4u;
          ${$}[${y}] = ${x}(${c.getByOffset(`index${y}`)}[component${y}]);
        `;m=`
        let outputOffset = global_idx * ${n};
        var data = vec4<u32>(0);
        ${g("data",0,"u32")}
        ${g("data",1,"u32")}
        ${g("data",2,"u32")}
        ${g("data",3,"u32")}
        ${u.setByOffset("global_idx","data")}
      }`}else m=`
        let outputIndices = ${u.offsetToIndices("global_idx")};
        let inputOffset = ${c.broadcastedIndicesToOffset("outputIndices",u)};
        ${u.setByOffset("global_idx",c.getByOffset("inputOffset"))}
      }`;return`
    ${p.registerUniform("vec_size","u32").declareVariables(c,u)}
    ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${m}`},d=[{type:12,data:s},...j(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length}`,inputDependencies:["rank"]},getShaderSource:l,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d})}},Np=e=>{Lo(e.inputs),e.compute(Yo(e.inputs),{inputs:[0]})}}),Xo,Wp,rm=M(()=>{Y(),te(),re(),_a(),Xo=e=>{let t=e[0].dataType,r=O.size(e[0].dims),i=O.size(e[1].dims),a=i%4===0,n=s=>{let l=B("x",t,[1],4),d=B("bias",t,[1],4),p=G("y",t,[1],4),c=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],u=g=>`
      let bias${g}_offset: u32 = (global_idx * 4 + ${g}) % uniforms.bias_size;
      let bias${g} = ${d.getByOffset(`bias${g}_offset / 4`)}[bias${g}_offset % 4];`,m=a?`
      let bias = ${d.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${u(0)}${u(1)}${u(2)}${u(3)}
      let bias = ${l.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(c).declareVariables(l,d,p)}

    ${Ji(Te(t))}

    ${s.mainStart(Dt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${l.getByOffset("global_idx")};
      ${m}
      let x_in = x + bias;
      ${p.setByOffset("global_idx",ea("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${a}`,inputDependencies:["type","type"]},getShaderSource:n,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Dt/4)}})}},Wp=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?np(e):e.compute(Xo(e.inputs))}}),Qo,Zo,qp,Vp,im=M(()=>{Y(),te(),be(),re(),Qo=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},Zo=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=O.normalizeAxis(t.axis,a),s=r.slice(0);s.splice(n,1,...i);let l=r[n],d=e[0].dataType===9?4:1,p=Math.ceil(O.size(s)/d),c=[{type:12,data:p},{type:6,data:l},{type:12,data:n},...j(e[0].dims,e[1].dims,s)],u=m=>{let g=B("data",e[0].dataType,e[0].dims.length,d),$=B("inputIndices",e[1].dataType,e[1].dims.length),y=G("output",e[0].dataType,s.length,d),x=b=>{let S=i.length,k=`var indicesIndices${b}  = ${$.type.indices}(0);`;for(let E=0;E<S;E++)k+=`${S>1?`indicesIndices${b}[${E}]`:`indicesIndices${b}`} = ${s.length>1?`outputIndices${b}[uniforms.axis + ${E}]`:`outputIndices${b}`};`;k+=`
          var idx${b} = ${$.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${g.type.indices};
        `;for(let E=0,C=0;E<a;E++)E===n?(k+=`${a>1?`dataIndices${b}[${E}]`:`dataIndices${b}`} = u32(idx${b});`,C+=S):(k+=`${a>1?`dataIndices${b}[${E}]`:`dataIndices${b}`} = ${s.length>1?`outputIndices${b}[${C}]`:`outputIndices${b}`};`,C++);return k},v;if(e[0].dataType===9){let b=(S,k,E="")=>`
          let outputIndices${k} = ${y.offsetToIndices(`outputOffset + ${k}u`)};
          ${x(k)};
          let offset${k} = ${g.indicesToOffset(`dataIndices${k}`)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${S}[${k}] = ${E}(${g.getByOffset(`index${k}`)}[component${k}]);
        `;v=`
        let outputOffset = global_idx * ${d};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${y.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${y.offsetToIndices("global_idx")};
      ${x("")};
      let value = ${g.getByIndices("dataIndices")};
      ${y.setByOffset("global_idx","value")};
      `;return`
      ${m.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,$,y)}
      ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:c}),getShaderSource:u}},qp=e=>ce({axis:e.axis}),Vp=(e,t)=>{let r=e.inputs;Qo(r),e.compute(Zo(e.inputs,t))}}),Jo,eu,Hp,jp,am=M(()=>{Y(),te(),be(),re(),Jo=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,a=e[0],n=e[2],s=e.length===4?e[3]:void 0;if(n.dims.length!==a.dims.length||!a.dims.map((l,d)=>d===r?Math.ceil(l/i)===n.dims[d]:l===n.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==a.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==n.dims.length||!s.dims.map((l,d)=>l===n.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},eu=(e,t)=>{let r=e[0].dims,i=e[1].dims,a=r.length,n=O.normalizeAxis(t.gatherAxis,a),s=O.normalizeAxis(t.quantizeAxis,a),l=r.slice(0);l.splice(n,1,...i);let d=O.size(l),p=e[2].dataType,c=e[0].dataType===22,u=[{type:12,data:d},{type:12,data:s},{type:12,data:n},{type:12,data:t.blockSize},...j(...e.map((g,$)=>g.dims),l)],m=g=>{let $=B("data",e[0].dataType,e[0].dims.length),y=B("inputIndices",e[1].dataType,e[1].dims.length),x=B("scales",e[2].dataType,e[2].dims.length),v=e.length>3?B("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=G("output",p,l.length),S=[$,y,x];v&&S.push(v);let k=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${g.registerUniforms(k).declareVariables(...S,b)}
        ${g.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${y.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${y.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${$.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${$.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${y.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[n]};
        }
        ${$.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${l.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${$.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${$.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${$.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${x.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${x.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${x.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${c?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Te(p)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((g,$)=>$!==1).map(g=>g.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(g,$)=>"rank")},getRunData:()=>({outputs:[{dims:l,dataType:p}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:u}),getShaderSource:m}},Hp=(e,t)=>{let r=e.inputs;Jo(r,t),e.compute(eu(e.inputs,t))},jp=e=>ce({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),tu,ru,Gp,Fp,nm=M(()=>{Y(),te(),be(),re(),tu=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},ru=(e,t)=>{let r=e[0].dims,i=e[0].dataType,a=r.length,n=e[1].dims,s=e[1].dataType,l=O.normalizeAxis(t.axis,a),d=r[l],p=n.slice(0),c=O.size(p),u=B("input",i,a),m=B("indicesInput",s,n.length),g=G("output",i,p.length),$=[{type:12,data:c},{type:6,data:d},{type:12,data:l}];return $.push(...j(r,n,p)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:$}),getShaderSource:y=>`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(u,m,g)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${g.offsetToIndices("global_idx")};

      var idx = ${m.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${u.type.indices}(outputIndices);
      ${u.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${u.getByIndices("inputIndices")};

      ${g.setByOffset("global_idx","value")};
  }`}},Gp=e=>ce({axis:e.axis}),Fp=(e,t)=>{let r=e.inputs;tu(r),e.compute(ru(e.inputs,t))}}),iu,au,Lp,Kp,sm=M(()=>{Y(),te(),re(),iu=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},au=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[a,n,s]=Ql.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),l=[a,n];if(!l)throw new Error("Can't use gemm on the given tensors");let d=O.size(l),p=[{type:12,data:d},{type:12,data:a},{type:12,data:n},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],c=["type","type"];e.length===3&&(p.push(...j(e[2].dims)),c.push("rank")),p.push(...j(l));let u=m=>{let g="";t.transA&&t.transB?g="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?g="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?g="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(g="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let $=t.alpha===1?"":"value *= uniforms.alpha;",y=B("a",e[0].dataType,e[0].dims),x=B("b",e[1].dataType,e[1].dims),v=y.type.value,b=null,S=[y,x];e.length===3&&(b=B("c",e[2].dataType,e[2].dims.length),S.push(b));let k=G("output",e[0].dataType,l.length);S.push(k);let E=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${m.registerUniforms(E).declareVariables(...S)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${v}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${g}
    }

    ${$}
    ${b!=null?`let cOffset = ${b.broadcastedIndicesToOffset("vec2(m, n)",k)}; value += ${v}(uniforms.beta) * ${b.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`};return{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:u}},Lp=e=>{let t=e.transA,r=e.transB,i=e.alpha,a=e.beta;return{transA:t,transB:r,alpha:i,beta:a,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Kp=(e,t)=>{iu(e.inputs),e.compute(au(e.inputs,t))}}),ze,nu,Yp,Ai,su,Xt,Xp,Qp=M(()=>{Y(),te(),be(),ya(),ba(),re(),Pt(),ze=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,nu=(e,t)=>{let r=e[0],i=ze(e,1),a=ze(e,2),n=ze(e,3),s=ze(e,4),l=ze(e,5),d=ze(e,6),p=ze(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=r.dims[0],u=r.dims[1],m=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],g=u,$=0,y=0,x=Math.floor(m/t.numHeads);if(d&&p&&O.size(d.dims)&&O.size(p.dims)){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims[0]!==c||d.dims[1]!==t.numHeads||d.dims[3]!==x)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(p.dims[0]!==c||p.dims[1]!==t.numHeads||p.dims[3]!==x)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[2]!==p.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(p.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');$=d.dims[2],y=d.dims[2]}else if(d&&O.size(d.dims)||p&&O.size(p.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(i&&O.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,g=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,g=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,g=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(n&&O.size(n.dims)>0){if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=$+g,S=0;if(s&&O.size(s.dims)>0){S=8;let z=s.dims;throw z.length===1?z[0]===c?S=1:z[0]===3*c+2&&(S=3):z.length===2&&z[0]===c&&z[1]===b&&(S=5),S===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let k=!1,E=m;if(a&&O.size(a.dims)>0){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(g!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=a.dims[2]}else{if(g!==a.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');E=a.dims[1]*a.dims[3],k=!0}}let C=!1;if(s&&O.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(l&&O.size(l.dims)>0){if(l.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==c||l.dims[1]!==t.numHeads||l.dims[2]!==u||l.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:c,sequenceLength:u,pastSequenceLength:$,kvSequenceLength:g,totalSequenceLength:b,maxSequenceLength:y,inputHiddenSize:0,hiddenSize:m,vHiddenSize:E,headSize:x,vHeadSize:Math.floor(E/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:S,scale:t.scale,broadcastResPosBias:C,passPastInKv:k,qkvFormat:v}},Yp=e=>ce({...e}),Ai=ce({perm:[0,2,1,3]}),su=(e,t,r,i,a,n,s)=>{let l=[i,a,n],d=O.size(l),p=[{type:12,data:d},{type:12,data:s},{type:12,data:n}],c=u=>{let m=G("qkv_with_bias",t.dataType,l),g=B("qkv",t.dataType,l),$=B("bias",r.dataType,l),y=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${u.registerUniforms(y).declareVariables(g,$,m)}
  ${u.mainStart()}
    ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:c},{inputs:[t,r],outputs:[-1]})[0]},Xt=(e,t,r,i,a,n,s,l)=>{let d=n;if(s&&O.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return d=su(e,n,s,t,i,r*a,l),d=d.reshape([t,i,r,a]),e.compute(Ze(d,Ai.perm),{inputs:[d],outputs:[-1]})[0]}else return n.dims.length===3&&(d=n.reshape([t,i,r,a])),e.compute(Ze(d,Ai.perm),{inputs:[d],outputs:[-1]})[0]},Xp=(e,t)=>{let r=nu(e.inputs,t),i=e.inputs[0],a=ze(e.inputs,1),n=ze(e.inputs,2),s=ze(e.inputs,3),l=ze(e.inputs,4),d=ze(e.inputs,5),p=ze(e.inputs,6),c=ze(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(a?.dims.length===5)throw new Error("Packed KV is not implemented");let u=a&&n&&a.dims.length===4&&n.dims.length===4,m=Xt(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(u)return Zt(e,m,a,n,l,void 0,p,c,d,r,t);if(!a||!n)throw new Error("key and value must be provided");let g=Xt(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,a,s,r.hiddenSize),$=Xt(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,n,s,2*r.hiddenSize);Zt(e,m,g,$,l,void 0,p,c,d,r,t)}}),Oi,ou,uu,na,Zp,Jp=M(()=>{Y(),te(),re(),Oi=e=>Array.from(e.getBigInt64Array(),Number),ou=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Oi(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},uu=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},na=(e,t)=>{let r=e[0].dims,i=t??Oi(e[1]),a=uu(r,i),n=O.size(a),s=e[0].dataType,l=B("input",s,r.length),d=G("output",s,a.length),p=c=>`
      const inputShape = ${l.indices(...r)};
      ${c.registerUniform("output_size","u32").declareVariables(l,d)}
      ${c.mainStart()}
      ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${d.offsetToIndices("global_idx")};
      var input_indices: ${l.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${l.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${d.indicesGet("output_indices","i")}  % input_dim_i;

        ${l.indicesSet("input_indices","i","input_dim_value")}
      }
      ${d.setByOffset("global_idx",l.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},...j(e[0].dims,a)]}),getShaderSource:p}},Zp=e=>{ou(e.inputs),e.compute(na(e.inputs),{inputs:[0]})}}),lu,Ri,eh,du,Bi,th,om=M(()=>{Y(),te(),be(),ba(),re(),Qp(),Jp(),Pt(),lu=(e,t)=>{let r=e[0],i=e[1],a=e[2],n=e[3],s=e[4];if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=!1,d=r.dims[0],p=r.dims[1],c=r.dims.length===3?l?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],u=p,m=0,g=0,$=Math.floor(c/t.numHeads),y=n&&n.dims.length!==0,x=s&&s.dims.length!==0,v=!0;if(y&&x){if(n.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');m=n.dims[1],g=n.dims[1]}else if(y||x)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let b;if(i){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');b=2,u=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==$)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(a)throw new Error('Expect "value" be none when "key" has packed kv format.');b=5,u=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==$)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');b=0,u=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');b=3}let S=0,k=!1,E=c;if(a){if(a.dims.length!==3&&a.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==a.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(a.dims.length===3){if(u!==a.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');E=a.dims[2]}else{if(u!==a.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');E=a.dims[1]*a.dims[3],k=!0}}let C=m+u;return{batchSize:d,sequenceLength:p,pastSequenceLength:m,kvSequenceLength:u,totalSequenceLength:C,maxSequenceLength:g,inputHiddenSize:0,hiddenSize:c,vHiddenSize:E,headSize:$,vHeadSize:Math.floor(E/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:S,scale:t.scale,broadcastResPosBias:!1,passPastInKv:k,qkvFormat:b,isPastkvBSNH:v}},Ri=(e,t,r,i)=>{let a=[i.batchSize,i.totalSequenceLength,i.kvNumHeads,i.headSize],n=4,s=O.size(a)/n,l=i.totalSequenceLength,d=G("present_kv",r,a.length,n),p=B("new_kv",e.dataType,e.dims.length,n),c=t?B("past_kv",t.dataType,t.dims.length,n):void 0,u=Math.ceil(i.headSize/n),m={x:l,y:e.dims[0],z:1},g=t?["rank","rank"]:["rank"],$=[{type:12,data:s},{type:12,data:i.pastSequenceLength},{type:12,data:i.kvSequenceLength},{type:12,data:i.totalSequenceLength}],y=[p];c?($.push(...j(e.dims),...j(t.dims),...j(a)),y.push(c)):$.push(...j(e.dims),...j(a));let x=[{name:"output_size",type:"u32"},{name:"past_seqlen",type:"u32"},{name:"new_seqlen",type:"u32"},{name:"present_seqlen",type:"u32"}],v=`      let past_batch_stride = uniforms.past_seqlen * num_heads * H;
        var past_head_stride = uniforms.past_seqlen * H;
        if (is_bsnh) {
          past_head_stride = H;
        }
        let in_offset = b * past_batch_stride + s * row_stride + n * past_head_stride + h;
        present_kv[out_offset] = past_kv[in_offset];`,b=`      let new_batch_stride = uniforms.new_seqlen * num_heads * H;
        let new_row_stride = num_heads * H;
        let new_head_stride = H;
        let in_offset = b * new_batch_stride + (s - past_seqlen) * new_row_stride + n * new_head_stride + h;
        present_kv[out_offset] = new_kv[in_offset];`,S=t?`if (s < past_seqlen) {
        ${v}
        } else if (s < past_seqlen + uniforms.new_seqlen) {
        ${b}
        }`:`if (s < past_seqlen + uniforms.new_seqlen) {
          ${b}
        }`,k=E=>`

  ${E.registerUniforms(x).declareVariables(...y,d)}
  ${E.mainStart([u,i.kvNumHeads,1])}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    var indices = ${d.offsetToIndices("global_idx")};
    let h = local_id.x;
    let n = local_id.y;
    let s = workgroup_id.x;
    let b = workgroup_id.y;
    let num_heads = ${i.kvNumHeads}u;
    let H = ${u}u;

    let present_seqlen = uniforms.present_seqlen;
    let present_batch_stride = present_seqlen * num_heads * H;
    var row_stride = H;
    let is_bsnh = ${i.isPastkvBSNH};

    if (is_bsnh) {
      row_stride = num_heads * H;
    }
    var present_head_stride = present_seqlen * H;
    if (is_bsnh) {
      present_head_stride = H;
    }

    let past_seqlen = uniforms.past_seqlen;

    let out_offset = b * present_batch_stride + s * row_stride + n * present_head_stride + h;
    ${S}
  }`;return{name:"ConcatPastNew",shaderCache:{hint:`${i.kvNumHeads}${u}${!!t}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:m,programUniforms:$}),getShaderSource:k}},eh=e=>ce({...e}),du=ce({perm:[0,2,1,3]}),Bi=(e,t,r,i,a)=>{let n=t,s=i.kvNumHeads,l=i.nReps;return t.dims.length===3&&i.kvSequenceLength!==0&&(n=t.reshape([i.batchSize,i.kvSequenceLength,s,i.headSize])),r?n=e.compute(Ri(n,r,n.dataType,i),{inputs:[n,r],outputs:[i.isPastkvBSNH?a:-1]})[0]:n=e.compute(Ri(n,void 0,n.dataType,i),{inputs:[n],outputs:[i.isPastkvBSNH?a:-1]})[0],l!==1&&(n=e.compute(na([n],[1,1,1,l]),{inputs:[n],outputs:[-1]})[0],n=n.reshape([i.batchSize,i.totalSequenceLength,s*l,i.headSize])),e.compute(Ze(n,du.perm),{inputs:[n],outputs:[-1]})[0]},th=(e,t)=>{let r=lu(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=Xt(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,e.inputs[0],void 0,0),a=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,n=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,s=Bi(e,e.inputs[1],a,r,1),l=Bi(e,e.inputs[2],n,r,2);Zt(e,i,s,l,void 0,void 0,void 0,void 0,void 0,r,t)}}),pu,hu,cu,rh,um=M(()=>{Y(),te(),re(),pu=(e,t)=>{let r=e[0].dims,i=r,a=2,n=O.sizeToDimension(r,a),s=O.sizeFromDimension(r,a),l=_e(s),d=s/l,p=[r[0],r[1],d],c=["rank","type","type"],u=[{type:12,data:s},{type:12,data:d}];u.push(...j(p,p));let m=g=>{let $=B("x",e[0].dataType,p.length,l),y=B("scale",e[1].dataType,e[1].dims),x=B("bias",e[2].dataType,e[2].dims),v=G("output",e[0].dataType,p.length,l),b=[$,y,x,v],S=$.type.value,k=l===1?"f32":`vec${l}<f32>`,E=64,C=[{name:"normSize",type:"u32"},{name:"normPackedSize",type:"u32"}];return`
  var<workgroup> meanShared : f32;
  var<workgroup> squaredNormShared : f32;
  var<workgroup> workgroupShared : array<${k}, ${E}>;
  const workgroupSize = ${E}u;
  ${g.registerUniforms(C).declareVariables(...b)}
  ${g.mainStart(E)}
    let norm = global_idx / workgroupSize;
    let batch = norm / uniforms.x_shape[1];
    let channel = norm % uniforms.x_shape[1];
    let localIndex = local_id.x;

    // initialize workgroup memory
    var initial = ${k}(0);
    for (var h = localIndex; h < uniforms.normPackedSize; h += workgroupSize) {
      initial = initial + ${k}(${$.get("batch","channel","h")});
    }
    workgroupShared[localIndex] = initial;
    workgroupBarrier();

    // Calculate the mean of current channel data.
    for (var currSize = workgroupSize >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (localIndex < currSize) {
        workgroupShared[localIndex] = workgroupShared[localIndex] + workgroupShared[localIndex + currSize];
      }
      workgroupBarrier();
    }
    if (localIndex == 0) {
      meanShared = ${pt("workgroupShared[0]",l)} / f32(uniforms.normSize);
    }
    workgroupBarrier();

    // reinitialize workgroup memory.
    initial = ${k}(0);
    for (var h = localIndex; h < uniforms.normPackedSize; h += workgroupSize) {
      let deviation =  ${k}(${$.get("batch","channel","h")}) - ${k}(meanShared);
      initial = initial + deviation * deviation;
    }
    workgroupShared[localIndex] = initial;
    workgroupBarrier();

    // Calculate the sum of square of deviation of current channel data.
    for (var currSize = workgroupSize >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (localIndex < currSize) {
        workgroupShared[localIndex] = workgroupShared[localIndex] + workgroupShared[localIndex + currSize];
      }
      workgroupBarrier();
    }
    if (localIndex == 0) {
      squaredNormShared = ${pt("workgroupShared[0]",l)};
    }
    workgroupBarrier();

    let invStdDev = inverseSqrt(squaredNormShared / f32(uniforms.normSize) + f32(${t.epsilon}));
    let channelScale = invStdDev * f32(${y.getByOffset("channel")});
    let channelShift = f32(${x.getByOffset("channel")}) - meanShared * channelScale;
    for (var h = localIndex; h < uniforms.normPackedSize; h += workgroupSize) {
      let value = ${$.get("batch","channel","h")} * ${S}(${k}(channelScale)) + ${S}(${k}(channelShift));
      ${v.set("batch","channel","h","value")};
    }
  }`};return{name:"InstanceNormalization",shaderCache:{hint:`${t.epsilon};${l}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:n},programUniforms:u}),getShaderSource:m}},hu=(e,t,r,i,a,n,s,l)=>{let d=_e(s),p=64,c=d===1?"vec2f":`mat2x${d}f`,u=d===1?"f32":`vec${d}f`,m=(C,z)=>`${c}(${C}, ${z})`,g=a*s/d,$=Math.ceil(n/p),y=["type"],x=[{type:12,data:$},{type:12,data:n},{type:12,data:Math.floor(s/d)},{type:12,data:Math.floor(n*s/d)}],v=C=>{let z=B("input",t.dataType,t.dims,d);return`
  ${C.declareVariables(z)}
  @group(0) @binding(1) var<storage, read_write> output : array<${c}>;
  struct Uniforms {wg_size:u32, H:u32, C:u32, image_size:u32};
  @group(0) @binding(2) var<uniform> uniforms: Uniforms;

  ${C.mainStart(p)}
    let currentImageNumber = global_idx / ${p} / uniforms.C;
    let currentChannelNumber = (global_idx / ${p}) % uniforms.C;
    let wgOffset = local_id.x * uniforms.wg_size;
    if (wgOffset >= uniforms.H) {
        return;
    }
    let wgMax = min(wgOffset + uniforms.wg_size, uniforms.H);

    let offset = currentImageNumber * uniforms.image_size + currentChannelNumber;
    var sum = ${kt("f32",d)};
    var squaredSum = ${kt("f32",d)};
    for (var i: u32 = wgOffset; i < wgMax; i++) {
        let value = ${u}(input[offset + i * uniforms.C]);
        sum += value;
        squaredSum += value * value;
    }
    output[global_idx] = ${m("sum","squaredSum")};
  }`},b=e.compute({name:"InstanceNormComputeMean",shaderCache:{hint:`${d}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:[a,s,p,2],dataType:1}],dispatchGroup:{x:a*s/d},programUniforms:x}),getShaderSource:v},{inputs:[t],outputs:[-1]})[0],S=[{type:12,data:g},{type:12,data:n},{type:12,data:Math.floor(s/d)},{type:12,data:Math.floor(p*s/d)}],k=["type","type","type"],E=C=>{let z=B("scale",r.dataType,r.dims,d),P=B("bias",i.dataType,i.dims,d);return`
  @group(0) @binding(0) var<storage, read> input : array<${c}>;
  @group(0) @binding(1) var<storage, read> scale : array<${z.type.storage}>;
  @group(0) @binding(2) var<storage, read> bias : array<${P.type.storage}>;
  @group(0) @binding(3) var<storage, read_write> output : array<${c}>;
  struct Uniforms {units_of_work : u32, H: u32, C : u32, image_size : u32};
  @group(0) @binding(4) var<uniform> uniforms: Uniforms;

  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.units_of_work")}
    let currentImageNumber = global_idx / uniforms.C;
    let currentChannelNumber = global_idx % uniforms.C;

    let offset = currentImageNumber * uniforms.image_size;
    var sum = ${kt("f32",d)};
    var squaredSum = ${kt("f32",d)};
    for (var i: u32 = 0; i < min(${p}, uniforms.H); i++) {
        let value = input[offset + i + currentChannelNumber * ${p}];
        sum += value[0];
        squaredSum += value[1];
    }
    sum = sum / f32(uniforms.H);
    squaredSum = squaredSum / f32(uniforms.H);
    let invStdDev = inverseSqrt(squaredSum - sum * sum + f32(${l}));
    let channelScale = invStdDev * ${u}(scale[currentChannelNumber]);
    let channelShift = ${u}(bias[currentChannelNumber]) - sum * channelScale;

    output[global_idx] = ${m("channelScale","channelShift")};
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${d};${l}`,inputDependencies:k},getRunData:()=>({outputs:[{dims:[a,s,2],dataType:1}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:S}),getShaderSource:E},{inputs:[b,r,i],outputs:[-1]})[0]},cu=(e,t,r)=>{let i=t[0].dims,a=i,n=i[0],s=i[i.length-1],l=O.sizeFromDimension(i,1)/s,d=_e(s),p=O.size(a)/d,c=[{type:12,data:l},{type:12,data:Math.floor(s/d)}],u=["type","type"],m=hu(e,t[0],t[1],t[2],n,l,s,r.epsilon),g=$=>{let y=ve(t[0].dataType),x=d===1?"vec2f":`mat2x${d}f`,v=d===1?y:`vec${d}<${y}>`,b=B("input",t[0].dataType,t[0].dims,d),S=G("output",t[0].dataType,a,d);return`
  @group(0) @binding(0) var<storage, read> input : array<${b.type.storage}>;
  @group(0) @binding(1) var<storage, read> scaleInput : array<${x}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${S.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let currentImageNumber = global_idx / (uniforms.C * uniforms.H);
    let currentChannelNumber = global_idx % uniforms.C;

    let scaleOffset = currentImageNumber * uniforms.C + currentChannelNumber;
    let scale = scaleInput[scaleOffset];
    output[global_idx] = fma(input[global_idx], ${v}(scale[0]), ${v}(scale[1]));
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${d}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:a,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:c}),getShaderSource:g},{inputs:[t[0],m]})},rh=(e,t)=>{t.format==="NHWC"?cu(e,e.inputs,t):e.compute(pu(e.inputs,t))}}),fu,mu,ih,lm=M(()=>{Y(),te(),re(),fu=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},mu=(e,t,r)=>{let i=t.simplified,a=e[0].dims,n=e[1],s=!i&&e[2],l=a,d=O.normalizeAxis(t.axis,a.length),p=O.sizeToDimension(a,d),c=O.sizeFromDimension(a,d),u=O.size(n.dims),m=s?O.size(s.dims):0;if(u!==c||s&&m!==c)throw new Error(`Size of X.shape()[axis:] == ${c}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${u} and bias size of ${m}`);let g=[];for(let E=0;E<a.length;++E)E<d?g.push(a[E]):g.push(1);let $=_e(c),y=["type","type"],x=[{type:12,data:p},{type:1,data:c},{type:12,data:Math.floor(c/$)},{type:1,data:t.epsilon}];s&&y.push("type");let v=r>1,b=r>2,S=E=>{let C=ve(e[0].dataType),z=[B("x",e[0].dataType,e[0].dims,$),B("scale",n.dataType,n.dims,$)];s&&z.push(B("bias",s.dataType,s.dims,$)),z.push(G("output",e[0].dataType,l,$)),v&&z.push(G("mean_data_output",1,g)),b&&z.push(G("inv_std_output",1,g));let P=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${E.registerUniforms(P).declareVariables(...z)}
  ${E.mainStart()}
    ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${kt("f32",$)};
    var mean_square_vector = ${kt("f32",$)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Rt(C,$,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${pt("mean_vector",$)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${pt("mean_square_vector",$)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Rt(C,$,"x[j + offset]")};
      let f32scale = ${Rt(C,$,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Rt(C,$,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},k=[{dims:l,dataType:e[0].dataType}];return v&&k.push({dims:g,dataType:1}),b&&k.push({dims:g,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${$};${r};${i}`,inputDependencies:y},getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(p/64)},programUniforms:x}),getShaderSource:S}},ih=(e,t)=>{fu(e.inputs),e.compute(mu(e.inputs,t,e.outputCount))}}),gu,yu,ah,nh,dm=M(()=>{Y(),te(),be(),re(),gu=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let a=Math.floor((t.k+t.blockSize-1)/t.blockSize),n=t.blockSize/8*t.bits,s=e[1];if(!O.areEqual(s.dims,[t.n,a,n]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=e[2].dims;if(O.size(l)!==t.n*a)throw new Error("scales input size error.");if(e.length===4){let d=e[3].dims,p=t.bits>4?t.n*a:t.n*Math.floor((a+1)/2);if(O.size(d)!==p)throw new Error("zeroPoints input size error.")}},yu=(e,t)=>{let r=e[0].dims,i=r.length,a=r[i-2],n=t.k,s=t.n,l=r.slice(0,i-2),d=O.size(l),p=e[1].dims[2]/4,c=e[0].dataType,u=_e(t.k),m=_e(p),g=_e(s),$=l.concat([a,s]),y=a>1&&s/g%2===0?2:1,x=O.size($)/g/y,v=64,b=[],S=[d,a,n/u],k=O.convertShape(e[1].dims).slice();k.splice(-1,1,p/m),b.push(...j(S)),b.push(...j(k)),b.push(...j(e[2].dims)),e.length===4&&b.push(...j(O.convertShape(e[3].dims)));let E=[d,a,s/g];b.push(...j(E));let C=z=>{let P=S.length,q=B("a",e[0].dataType,P,u),W=B("b",12,k.length,m),J=B("scales",e[2].dataType,e[2].dims.length),Q=[q,W,J],ae=e.length===4?B("zero_points",12,e[3].dims.length):void 0;ae&&Q.push(ae);let se=E.length,ie=G("output",e[0].dataType,se,g),K=ve(e[0].dataType),oe=(()=>{switch(u){case 1:return`array<${K}, 8>`;case 2:return`mat4x2<${K}>`;case 4:return`mat2x4<${K}>`;default:throw new Error(`${u}-component is not supported.`)}})(),pe=()=>{let R=`
          // reuse a data
            var input_offset = ${q.indicesToOffset(`${q.type.indices}(batch, row, word_offset)`)};
            var a_data: ${oe};
            for (var j: u32 = 0; j < ${8/u}; j++) {
              a_data[j] = ${q.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let U=0;U<g*y;U++)R+=`
            b_value = ${m===1?`b${U}_data`:`b${U}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${oe}(${Array.from({length:4},(ee,fe)=>`${K}(b_value_lower[${fe}]), ${K}(b_value_upper[${fe}])`).join(", ")});
            b_dequantized_values = ${u===1?`${oe}(${Array.from({length:8},(ee,fe)=>`(b_quantized_values[${fe}] - ${ae?`zero_point${U}`:"zero_point"}) * scale${U}`).join(", ")});`:`(b_quantized_values - ${oe}(${Array(8).fill(`${ae?`zero_point${U}`:"zero_point"}`).join(",")})) * scale${U};`};
            workgroup_shared[local_id.x * ${y} + ${Math.floor(U/g)}]${g>1?`[${U%g}]`:""} += ${Array.from({length:8/u},(ee,fe)=>`${u===1?`a_data[${fe}] * b_dequantized_values[${fe}]`:`dot(a_data[${fe}], b_dequantized_values[${fe}])`}`).join(" + ")};
          `;return R},X=()=>{let R=`
            var col_index = col * ${g};
            ${ae?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${K}(8);`}
            `;for(let U=0;U<g*y;U++)R+=`
            let scale${U} = ${J.getByOffset("col_index * nBlocksPerCol + block")};
            ${ae?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${ae.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${U} = ${K}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return R},ne=()=>{let R=`col_index = col * ${g};`;for(let U=0;U<g*y;U++)R+=`
            let b${U}_data = ${W.getByIndices(`${W.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return R+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${oe};
            var b_dequantized_values: ${oe};`,R};return`
        var<workgroup> workgroup_shared: array<${ie.type.value}, ${y*v}>;
        ${z.declareVariables(...Q,ie)}
        ${z.mainStart([v,1,1])}
          let output_indices = ${ie.offsetToIndices(`(global_idx / ${v}) * ${y}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/u};
            ${X()}
            for (var word: u32 = 0; word < ${p}; word += ${m}) {
              ${ne()}
              for (var i: u32 = 0; i < ${m}; i++) {
                ${pe()}
                word_offset += ${8/u};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${y}) {
            var output_value: ${ie.type.value} = ${ie.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${y};
            }
            ${ie.setByIndices(`${ie.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${u};${m};${g};${y};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:$,dataType:c}],dispatchGroup:{x},programUniforms:b}),getShaderSource:C}},ah=(e,t)=>{gu(e.inputs,t),e.compute(yu(e.inputs,t))},nh=e=>ce(e)}),$u,wu,bu,_u,vu,xu,Su,ku,sh,pm=M(()=>{Y(),te(),re(),$u=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},wu=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
            k = i32(${e.indicesGet("indices",a)}) - ${H("uniforms.pads",a,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${H("uniforms.x_shape",a,t)})) {
              break;
            }
            offset += k * i32(${H("uniforms.x_strides",a,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},bu=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${H("uniforms.pads",a,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${H("uniforms.x_shape",a,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${H("uniforms.x_shape",a,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${H("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},_u=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${H("uniforms.pads",a,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${H("uniforms.x_shape",a,t)})) {
                  k = i32(${H("uniforms.x_shape",a,t)}) - 1;
                }
                offset += k * i32(${H("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},vu=(e,t,r)=>{let i="";for(let a=t-1;a>=0;--a)i+=`
                k = i32(${e.indicesGet("indices",a)}) - ${H("uniforms.pads",a,r)};
                if (k < 0)  {
                  k += i32(${H("uniforms.x_shape",a,t)}]);
                }
                if (k >= i32(${H("uniforms.x_shape",a,t)})) {
                  k -= i32(${H("uniforms.x_shape",a,t)});
                }
                offset += k * i32(${H("uniforms.x_strides",a,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},xu=(e,t,r)=>{switch(r.mode){case 0:return wu(e,t,r.pads.length);case 1:return bu(e,t,r.pads.length);case 2:return _u(e,t,r.pads.length);case 3:return vu(e,t,r.pads.length);default:throw new Error("Invalid mode")}},Su=(e,t)=>{let r=O.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,a=O.size(r),n=[{type:12,data:a},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&n.push({type:s?e[2].dataType:1,data:t.value}),n.push(...j(e[0].dims,r));let l=["rank"],d=p=>{let c=G("output",e[0].dataType,r.length),u=B("x",e[0].dataType,i.length),m=u.type.value,g=xu(c,i.length,t),$=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&$.push({name:"constant_value",type:s?m:"f32"}),`
            ${p.registerUniforms($).declareVariables(u,c)}
            ${p.mainStart()}
            ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${c.offsetToIndices("global_idx")};

            var value = ${m}(0);
            ${g}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(r)/64)},programUniforms:n}),getShaderSource:d}},ku=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,a=e[0].dims.length,n=new Int32Array(2*a).fill(0);if(e.length>=4){let l=e[3].getBigInt64Array();for(let d=0;d<l.length;d++)n[Number(l[d])]=Number(r[d]),n[Number(l[d])+a]=Number(r[d+l.length])}else r.forEach((l,d)=>n[Number(d)]=Number(l));let s=[];return n.forEach(l=>s.push(l)),{mode:t.mode,value:i,pads:s}}else return t},sh=(e,t)=>{$u(e.inputs);let r=ku(e.inputs,t);e.compute(Su(e.inputs,r),{inputs:[0]})}}),Ht,Di,Mi,Pi,Ui,Iu,Eu,Ni,Wi,oh,uh,qi,lh,dh,Vi,ph,hh,ch,fh,hm=M(()=>{Le(),Y(),te(),re(),Ht=e=>{if(ge.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Di=(e,t,r)=>{let i=t.format==="NHWC",a=e.dims.slice();i&&a.splice(1,0,a.pop());let n=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),l=t.strides.slice(),d=n?t.dilations.slice():[],p=t.pads.slice();Ar.adjustPoolAttributes(r,a,s,l,d,p);let c=Ar.computePoolOutputShape(r,a,l,d,s,p,t.autoPad,t.ceilMode),u=Object.assign({},t);n?Object.assign(u,{kernelShape:s,strides:l,pads:p,dilations:d,cacheKey:t.cacheKey}):Object.assign(u,{kernelShape:s,strides:l,pads:p,cacheKey:t.cacheKey});let m=c.slice();return m.push(m.splice(1,1)[0]),[u,i?m:c]},Mi=(e,t)=>{let r=t.format==="NHWC",i=O.size(e),a=O.size(t.kernelShape),n=[{type:12,data:i},{type:12,data:a}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],d=t.strides[t.strides.length-1],p=t.pads[t.pads.length/2-1],c=t.pads[t.pads.length-1],u=!!(p+c);n.push({type:12,data:l},{type:12,data:d},{type:12,data:p},{type:12,data:c}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let m=!1;if(t.kernelShape.length===2){let g=t.kernelShape[t.kernelShape.length-2],$=t.strides[t.strides.length-2],y=t.pads[t.pads.length/2-2],x=t.pads[t.pads.length-2];m=!!(y+x),n.push({type:12,data:g},{type:12,data:$},{type:12,data:y},{type:12,data:x}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[n,s,!0,u,m]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let l=O.computeStrides(t.kernelShape);n.push({type:12,data:l},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:l.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let d=t.pads.reduce((p,c)=>p+c);return[n,s,!!d,!1,!1]}},Pi=(e,t,r,i,a,n,s,l,d,p,c,u)=>{let m=a.format==="NHWC",g=t.type.value,$=G("output",t.type.tensor,i);if(a.kernelShape.length<=2){let y="",x="",v="",b=r-(m?2:1);if(c?y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`:y=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${n}
                }`,a.kernelShape.length===2){let S=r-(m?3:2);u?x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${S}] < 0 || xIndices[${S}] >= uniforms.x_shape[${S}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:x=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${S}] = indices[${S}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(d).declareVariables(t,$)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${$.offsetToIndices("global_idx")};
              var xIndices = ${$.offsetToIndices("global_idx")};

              var value = ${g}(${l});
              var pad = 0;
              ${x}
              ${y}
              ${v}
              ${s}

              output[global_idx] = value;
            }`}else{if(m)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let y=a.kernelShape.length,x=a.pads.length,v="";return p?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${n}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${n}
            `,`
            ${e.registerUniforms(d).declareVariables(t,$)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${$.offsetToIndices("global_idx")};
              var xIndices = ${$.offsetToIndices("global_idx")};

              var offsets: array<u32, ${y}>;

              var value = ${g}(${l});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${y-1}u; j++) {
                  offsets[j] = offset / ${H("uniforms.kernelStrides","j",y)};
                  offset -= offsets[j] * ${H("uniforms.kernelStrides","j",y)};
                }
                offsets[${y-1}] = offset;

                isPad = false;
                for (var j = ${r-y}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${H("uniforms.strides",`j - ${r-y}u`,y)}
                    + offsets[j - ${r-y}u] - ${H("uniforms.pads","j - 2u",x)};
                  ${v}
              }
              ${s}

              output[global_idx] = value;
            }`}},Ui=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Iu=e=>`${Ui(e)};${e.countIncludePad}`,Eu=e=>`${Ui(e)};${e.storageOrder};${e.dilations}`,Ni=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Wi=(e,t,r,i)=>{let[a,n]=Di(t,i,r),s=B("x",t.dataType,t.dims.length),l=s.type.value,d="value += x_val;",p="";a.countIncludePad?p+=`value /= ${l}(uniforms.kernelSize);`:p+=`value /= ${l}(i32(uniforms.kernelSize) - pad);`;let[c,u,m,g,$]=Mi(n,a);c.push(...j(t.dims,n));let y=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${m};${g};${$}`,inputDependencies:y},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(n)/64)},programUniforms:c}),getShaderSource:x=>Pi(x,s,t.dims.length,n.length,a,d,p,0,u,m,g,$)}},oh=e=>{let t=e.count_include_pad!==0,r=Ni(e);r.ceilMode;let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:Iu(i)}},uh=(e,t)=>{Ht(e.inputs),e.compute(Wi("AveragePool",e.inputs[0],!1,t))},qi={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},lh=e=>{let t=e.format;return{format:t,...qi,cacheKey:t}},dh=(e,t)=>{Ht(e.inputs),e.compute(Wi("GlobalAveragePool",e.inputs[0],!0,t))},Vi=(e,t,r,i)=>{let[a,n]=Di(t,i,r),s=`
      value = max(x_val, value);
    `,l="",d=B("x",t.dataType,t.dims.length),p=["rank"],[c,u,m,g,$]=Mi(n,a);return c.push(...j(t.dims,n)),{name:e,shaderCache:{hint:`${i.cacheKey};${m};${g};${$}`,inputDependencies:p},getRunData:()=>({outputs:[{dims:n,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(n)/64)},programUniforms:c}),getShaderSource:y=>Pi(y,d,t.dims.length,n.length,a,s,l,t.dataType===10?-65504:-1e5,u,m,g,$)}},ph=(e,t)=>{Ht(e.inputs),e.compute(Vi("MaxPool",e.inputs[0],!1,t))},hh=e=>{let t=e.storage_order,r=e.dilations,i=Ni(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");i.ceilMode;let a={storageOrder:t,dilations:r,...i,cacheKey:""};return{...a,cacheKey:Eu(a)}},ch=e=>{let t=e.format;return{format:t,...qi,cacheKey:t}},fh=(e,t)=>{Ht(e.inputs),e.compute(Vi("GlobalMaxPool",e.inputs[0],!0,t))}}),Tu,Cu,mh,gh,cm=M(()=>{Y(),te(),be(),re(),Tu=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((a,n)=>n===t.axis||a===e[0].dims[n]).reduce((a,n)=>a&&n,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Cu=(e,t)=>{let r=O.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,a=i===3,n=e[0].dims,s=e[1].dataType,l=O.size(n),d=i===3||i===2,p=d?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,c=e[1].dims,u=e.length>2?e[2]:void 0,m=u?d?[Math.ceil(O.size(u.dims)/4)]:u.dims:void 0,g=c.length===0||c.length===1&&c[0]===1,$=g===!1&&c.length===1,y=_e(l),x=g&&(!d||y===4),v=x?y:1,b=x&&!d?y:1,S=B("input",d?12:i,p.length,b),k=B("scale",s,c.length),E=u?B("zero_point",d?12:i,m.length):void 0,C=G("output",s,n.length,v),z=[S,k];E&&z.push(E);let P=[p,c];u&&P.push(m);let q=[{type:12,data:l/v},{type:12,data:r},{type:12,data:t.blockSize},...j(...P,n)],W=J=>{let Q=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${J.registerUniforms(Q).declareVariables(...z,C)}
      ${J.mainStart()}
          ${J.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${C.offsetToIndices("global_idx")};

          // Set input x
          ${d?`
            let input = ${S.getByOffset("global_idx / 4")};
            let x_vec = ${a?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${S.getByOffset("global_idx")};`};

          // Set scale input
          ${g?`let scale_value= ${k.getByOffset("0")}`:$?`
            let scale_index = ${C.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${k.getByOffset("scale_index")};`:`
            var scale_indices: ${k.type.indices} = output_indices;
            let index = ${k.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${k.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${k.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${E?g?d?`
                let zero_point_input = ${E.getByOffset("0")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${E.getByOffset("0")}`:$?d?`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${E.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${C.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${E.getByOffset("zero_point_index")};`:d?`
                let zero_point_offset = ${k.indicesToOffset("scale_indices")};
                let zero_point_input = ${E.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${a?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${E.getByIndices("scale_indices")};`:`let zero_point_value = ${d?a?"i32":"u32":S.type.value}(0);`};
      // Compute and write output
      ${C.setByOffset("global_idx",`${C.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:E?["rank","rank","rank"]:["rank","rank"]},getShaderSource:W,getRunData:()=>({outputs:[{dims:n,dataType:s}],dispatchGroup:{x:Math.ceil(l/v/64),y:1,z:1},programUniforms:q})}},mh=(e,t)=>{Tu(e.inputs,t),e.compute(Cu(e.inputs,t))},gh=e=>ce({axis:e.axis,blockSize:e.blockSize})}),zu,Au,yh,fm=M(()=>{Le(),Y(),re(),zu=(e,t,r)=>{let i=e===t,a=e<t&&r<0,n=e>t&&r>0;if(i||a||n)throw new Error("Range these inputs' contents are invalid.")},Au=(e,t,r,i)=>{let a=Math.abs(Math.ceil((t-e)/r)),n=[a],s=a,l=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...j(n)],d=p=>{let c=G("output",i,n.length),u=c.type.value,m=[{name:"outputSize",type:"u32"},{name:"start",type:u},{name:"delta",type:u}];return`
        ${p.registerUniforms(m).declareVariables(c)}
        ${p.mainStart()}
        ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${u}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:d,getRunData:()=>({outputs:[{dims:n,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l})}},yh=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),ge.webgpu.validateInputContent&&zu(t,r,i),e.compute(Au(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),Ou,Ru,Bu,Du,Mu,Pu,Uu,Nu,Wu,qu,Vu,Hi,Hu,ju,Gu,Fu,Lu,$h,wh,mm=M(()=>{Y(),te(),be(),re(),Ou=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Ru=(e,t,r)=>{t.every(a=>a>=0&&a<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((a,n)=>i[a]=e[n]),i},Bu=(e,t,r,i,a,n)=>{let[s,l,d]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],p=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(c=>n.push(c));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(l>0&&e.length>l&&e[l].dims.length>0){if(e[l].getFloat32Array().forEach(c=>i.push(c)),i.length!==0&&i.length!==p&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Ou(i,t),t.axes.length>0&&Ru(i,t.axes,p).forEach((c,u)=>i[u]=c)}if(d>0&&e.length>d&&(e[d].getBigInt64Array().forEach(c=>a.push(Number(c))),a.length!==p||r>=18&&a.length===t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(a.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof a<"u"&&i.length>0&&a.length>p)throw new Error("Resize requires only of scales or sizes to be specified")},Du=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`return ${t}(xResized) / ${t}(xScale);`;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    // The whole part and the fractional part are calculated separately due to inaccuracy of floating
                    // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
                    // offset-by-one error later in floor().
                    let whole = ${t}(xResized * (lengthOriginal - 1) / (lengthResized - 1));
                    let fract =
                        ${t}(xResized * (lengthOriginal - 1) % (lengthResized - 1)) / ${t}(lengthResized - 1);
                    return whole + fract;
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",Mu=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",Pu=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),a=e.length===0?i:e.slice();return t.length>0?(t.forEach((n,s)=>{i[n]=a[s],i[s+r]=a[t.length+s]}),i):a},Uu=(e,t,r,i)=>{let a=[];if(r.length>0)if(i.length>0){if(e.forEach(n=>a.push(n)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((n,s)=>a[n]=r[s])}else r.forEach(n=>a.push(n));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");a=e.map((n,s)=>Math.round(n*t[s]))}return a},Nu=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(n=>t[n]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(n=>t[n]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let a=e.slice();return r.axes.length>0?(r.axes.forEach(n=>t[n]=i),r.axes.forEach(n=>a[n]=Math.round(e[n]*t[n]))):(t.fill(i,0,t.length),a.forEach((n,s)=>a[s]=Math.round(n*t[s]))),a},Wu=(e,t,r,i,a)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${H("uniforms.scales","i",i)};
        var roi_low = ${H("uniforms.roi","i",a)};
        var roi_hi = ${H("uniforms.roi",`i + ${t.length}`,a)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${H("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${H("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,qu=(e,t,r,i,a,n,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${H("uniforms.scales","i",a)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${H("uniforms.roi","i",n)};
          var roi_hi = ${H("uniforms.roi",`i + ${r.length}`,n)};
          var input_shape_i = ${H("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${H("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i"," input_index")}
      }
      return input_indices;
    }`,Vu=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${H("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Hi=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",Hu=(e,t,r,i,a)=>{let[n,s,l,d]=r.length===2?[-1,0,1,-1]:[0,2,3,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(col, ${r[l]} - 1))`)};
      ${Hi(e,d,n,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${p} = originalIndices[${s}];
      var col:${p} = originalIndices[${l}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[l]} - 1)) {
        return ${a};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[l]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${n}])`:"0"};
      var x11: ${p} = getInputValue(batch, channel, row1, col1);
      var x12: ${p} = getInputValue(batch, channel, row1, col2);
      var x21: ${p} = getInputValue(batch, channel, row2, col1);
      var x22: ${p} = getInputValue(batch, channel, row2, col2);
      var dx1: ${p} = abs(row - ${p}(row1));
      var dx2: ${p} = abs(${p}(row2) - row);
      var dy1: ${p} = abs(col - ${p}(col1));
      var dy2: ${p} = abs(${p}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},ju=(e,t,r,i,a,n,s,l,d,p)=>{let c=r.length===2,[u,m]=c?[0,1]:[2,3],g=e.type.value,$=y=>{let x=y===u?"row":"col";return`
      fn ${x}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${g} {
        var output_index = ${t.indicesGet("output_indices",y)};
        var originalIdx: ${g} = getOriginalCoordinateFromResizedCoordinate(output_index, ${a[y]},
        ${i[y]}, ${r[y]}, ${n[y]}, ${n[y]} + ${r.length});
        var fractOriginalIdx: ${g} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${l} && (originalIdx < 0 || originalIdx > (${r[y]} - 1))) {
          return ${d};
        }
        var data: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${x}: ${g} = originalIdx + ${g}(i);
          if (${x} < 0 || ${x} >= ${r[y]}) {
            ${p?`coefs[i + 1] = 0.0;
                        continue;`:l?`return ${d};`:`${x} = max(0, min(${x}, ${r[y]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",y,`u32(${x})`)};
          data[i + 1] = ${y===u?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${$(u)};
    ${$(m)};
  fn getCubicInterpolationCoefs(s: ${g}) -> array<${g}, 4> {
    var absS = abs(s);
    var coeffs: array<${g}, 4> = array<${g}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${g} = 1.0 - absS;
    var twoMinusAbsS: ${g} = 2.0 - absS;
    var onePlusAbsS: ${g} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${g}, 4>, coefs: array<${g}, 4>) -> ${g} {
    var coefsSum: ${g} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${g} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Gu=(e,t,r,i,a)=>{let[n,s,l,d,p]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(height, ${r[l]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(width, ${r[d]} - 1))`)};
      ${Hi(e,p,n,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${c} = originalIndices[${s}];
      var height:${c} = originalIndices[${l}];
      var width:${c} = originalIndices[${d}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[l]} - 1) || width < 0 || (width > ${r[d]} - 1)) {
      return ${a};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[l]} - 1));
      width = max(0, min(width, ${r[d]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${p}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${n}])`:"0"};

      var x111: ${c} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${c} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${c} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${c} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${c} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${c} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${c} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${c} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${c} = abs(depth - ${c}(depth1));
      var dx2: ${c} = abs(${c}(depth2) - depth);
      var dy1: ${c} = abs(height - ${c}(height1));
      var dy2: ${c} = abs(${c}(height2) - height);
      var dz1: ${c} = abs(width - ${c}(width1));
      var dz2: ${c} = abs(${c}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Fu=(e,t,r,i,a,n)=>{let s=e.dims,l=Pu(n,t.axes,s.length),d=Uu(s,i,a,t.axes),p=i.slice();i.length===0&&(p=s.map((b,S)=>b===0?1:d[S]/b),t.keepAspectRatioPolicy!=="stretch"&&(d=Nu(s,p,t)));let c=G("output",e.dataType,d.length),u=B("input",e.dataType,s.length),m=O.size(d),g=s.length===d.length&&s.every((b,S)=>b===d[S]),$=t.coordinateTransformMode==="tf_crop_and_resize",y=t.extrapolationValue,x=u.type.value,v=b=>`
      ${g?"":`
      ${Du(t.coordinateTransformMode,x)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${Vu(u,s)};
              ${Mu(t.nearestMode,r,x)};
              ${qu(u,c,s,d,p.length,l.length,$)};
              `;case"linear":return`
              ${Wu(c,s,d,p.length,l.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${Hu(u,c,s,$,y)}`;if(s.length===3||s.length===5)return`${Gu(u,c,s,$,y)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${ju(u,c,s,d,p,l,t.cubicCoeffA,$,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",p.length).registerUniform("roi","f32",l.length).declareVariables(u,c)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${g?"output[global_idx] = input[global_idx];":`
        let output_indices = ${c.offsetToIndices("global_idx")};
        var input_indices: ${u.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${u.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${p.length>0?p:""}|${a.length>0?a:""}|${l.length>0?l:""}|${g}|${s}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},{type:1,data:p},{type:1,data:l},...j(s,d)]})}},Lu=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},$h=(e,t)=>{let r=[],i=[],a=[],n=Lu(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Bu(e.inputs,t,n,r,i,a),e.compute(Fu(e.inputs[0],t,n,r,i,a),{inputs:[0]})},wh=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,a=e.cubicCoeffA,n=e.excludeOutside!==0,s=e.extrapolationValue,l=e.keepAspectRatioPolicy,d=e.mode,p=e.nearestMode===""?"simple":e.nearestMode;return ce({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:a,excludeOutside:n,extrapolationValue:s,keepAspectRatioPolicy:l,mode:d,nearestMode:p})}}),Ku,Yu,bh,gm=M(()=>{Y(),te(),be(),re(),Ku=(e,t)=>{let[r,i,a,n]=e,{numHeads:s,rotaryEmbeddingDim:l}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!O.areEqual(i.dims,[])&&!O.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(!O.areEqual(a.dims,n.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(l>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let d=r.dims[0],p=r.dims[r.dims.length-2],c=a.dims[0],u=O.sizeFromDimension(r.dims,1)/p,m=l===0?a.dims[1]*2:u/s;if(l>m)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(d!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(p!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(m/2!==a.dims[1]&&l/2!==a.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${a.dims[1]}`);if(p>c)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},Yu=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:a,scale:n}=t,s=e[0].dims[0],l=O.sizeFromDimension(e[0].dims,1),d=e[0].dims[e[0].dims.length-2],p=l/d,c=e[2].dims[1],u=a===0?c*2:p/i,m=new Array(s,d,p/u,u-c),g=O.computeStrides(m),$=[{type:1,data:n},{type:12,data:m},{type:12,data:g},...e[0].dims.length===3?new Array({type:12,data:[l,p,u,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[l,u,d*u,1]}):[],...j(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],y=x=>{let v=B("input",e[0].dataType,e[0].dims.length),b=B("position_ids",e[1].dataType,e[1].dims.length),S=B("cos_cache",e[2].dataType,e[2].dims.length),k=B("sin_cache",e[3].dataType,e[3].dims.length),E=G("output",e[0].dataType,e[0].dims.length);return x.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:m.length},{name:"global_strides",type:"u32",length:g.length},{name:"input_output_strides",type:"u32",length:g.length}]),`
        ${x.declareVariables(v,b,S,k,E)}

        ${x.mainStart(Dt)}
          let half_rotary_emb_dim = uniforms.${S.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${x.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",G("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${v.getByOffset("i")} * ${S.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${E.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${S.get("position_id","bsnh[3]")};
            ${E.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${E.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ce({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(m)/Dt)},programUniforms:$})}},bh=(e,t)=>{Ku(e.inputs,t),e.compute(Yu(e.inputs,t))}}),Xu,Qu,_h,ym=M(()=>{Y(),te(),re(),Xu=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let a=t.dims[t.dims.length-1],n=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==a)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==n)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==a)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==a)throw new Error("Bias must have the same hidden size as input")}},Qu=(e,t,r,i)=>{let a=t.simplified,n=e[0].dims,s=O.size(n),l=n,d=s,p=n.slice(-1)[0],c=i?n.slice(0,-1).concat(1):[],u=!a&&e.length>3,m=e.length>4,g=i&&r>1,$=i&&r>2,y=r>3,x=64,v=_e(p),b=[{type:12,data:d},{type:12,data:v},{type:12,data:p},{type:1,data:t.epsilon}],S=E=>{let C=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[B("x",e[0].dataType,e[0].dims,v),B("skip",e[1].dataType,e[1].dims,v),B("gamma",e[2].dataType,e[2].dims,v)];u&&z.push(B("beta",e[3].dataType,e[3].dims,v)),m&&z.push(B("bias",e[4].dataType,e[4].dims,v)),z.push(G("output",e[0].dataType,l,v)),g&&z.push(G("mean_output",1,c)),$&&z.push(G("inv_std_output",1,c)),y&&z.push(G("input_skip_bias_sum",e[0].dataType,l,v));let P=ve(e[0].dataType),q=ve(1,v);return`

      ${E.registerUniforms(C).declareVariables(...z)}
      var<workgroup> sum_shared : array<${q}, ${x}>;
      var<workgroup> sum_squared_shared : array<${q}, ${x}>;

      ${E.mainStart([x,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${x};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${x};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${x-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${m?"bias[offset1d + i]":P+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${y?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Rt(P,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${x};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${pt("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${pt("square_sum",v)} / f32(uniforms.hidden_size) ${a?"":"- mean * mean"} + uniforms.epsilon);
        ${g?"mean_output[global_idx] = mean;":""}
        ${$?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${a?"":`- ${P}(mean)`}) *
            ${P}(inv_std_dev) * gamma[offset1d + i]
            ${u?"+ beta[offset1d + i]":""};
        }
      }`},k=[{dims:l,dataType:e[0].dataType}];return r>1&&k.push({dims:c,dataType:1}),r>2&&k.push({dims:c,dataType:1}),r>3&&k.push({dims:n,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${g};${$};${y}`,inputDependencies:e.map((E,C)=>"type")},getShaderSource:S,getRunData:()=>({outputs:k,dispatchGroup:{x:Math.ceil(d/p)},programUniforms:b})}},_h=(e,t)=>{Xu(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Qu(e.inputs,t,e.outputCount,!1),{outputs:r})}}),Zu,jt,Ju,ji,el,tl,vh,xh,$m=M(()=>{Y(),te(),be(),re(),Zu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},jt=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Ju=(e,t)=>{if(e.length>1){let r=jt(e,1),i=jt(e,2),a=jt(e,3);return a.length===0&&(a=[...Array(e[0].dims.length).keys()]),ce({starts:r,ends:i,axes:a})}else return t},ji=(e,t,r,i,a)=>{let n=e;return e<0&&(n+=r[i[t]]),a[t]<0?Math.max(0,Math.min(n,r[i[t]]-1)):Math.max(0,Math.min(n,r[i[t]]))},el=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length}; i >= 0; i--) {
            let input_shape_i = ${H("uniforms.input_shape","i",r.length)};
            let steps_i = ${H("uniforms.steps","i",r.length)};
            let signs_i = ${H("uniforms.signs","i",r.length)};
            let starts_i = ${H("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,tl=(e,t)=>{let r=e[0].dims,i=O.size(r),a=t.axes.length>0?O.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],n=jt(e,4);n.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),n.length===0&&(n=Array(a.length).fill(1));let s=t.starts.map((v,b)=>ji(v,b,r,a,n)),l=t.ends.map((v,b)=>ji(v,b,r,a,n));if(a.length!==s.length||a.length!==l.length)throw new Error("start, ends and axes should have the same number of elements");if(a.length!==r.length)for(let v=0;v<r.length;++v)a.includes(v)||(s.splice(v,0,0),l.splice(v,0,r[v]),n.splice(v,0,1));let d=n.map(v=>Math.sign(v));n.forEach((v,b,S)=>{if(v<0){let k=(l[b]-s[b])/v,E=s[b],C=E+k*n[b];s[b]=C,l[b]=E,S[b]=-v}});let p=r.slice(0);a.forEach((v,b)=>{p[v]=Math.ceil((l[v]-s[v])/n[v])});let c={dims:p,dataType:e[0].dataType},u=G("output",e[0].dataType,p.length),m=B("input",e[0].dataType,e[0].dims.length),g=O.size(p),$=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:d.length},{name:"steps",type:"u32",length:n.length}],y=[{type:12,data:g},{type:12,data:s},{type:6,data:d},{type:12,data:n},...j(e[0].dims,p)],x=v=>`
      ${v.registerUniforms($).declareVariables(m,u)}
        ${el(m,u,r)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${u.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${u.setByOffset("global_idx",m.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${d.length}_${s.length}_${n.length}`,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:[c],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:y})}},vh=(e,t)=>{Zu(e.inputs,t);let r=Ju(e.inputs,t);e.compute(tl(e.inputs,r),{inputs:[0]})},xh=e=>{let t=e.starts,r=e.ends,i=e.axes;return ce({starts:t,ends:r,axes:i})}}),rl,il,Sh,kh,wm=M(()=>{Y(),te(),be(),re(),rl=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},il=(e,t)=>{let r=e.dims,i=O.size(r),a=64,n=t.axis;if(n<0&&(n=r.length+n),n<r.length-1)throw new Error("softmax only supports last axis for now.");let s=r[n],l=i/s,d=_e(s),p=s/d,c=(x,v)=>v===4?`max(max(${x}.x, ${x}.y), max(${x}.z, ${x}.w))`:v===2?`max(${x}.x, ${x}.y)`:v===3?`max(max(${x}.x, ${x}.y), ${x}.z)`:x,u=B("x",e.dataType,e.dims,d),m=G("result",e.dataType,e.dims,d),g=u.type.value,$=ve(e.dataType)==="f32"?`var threadMax = ${g}(-3.402823e+38f);`:`var threadMax = ${g}(-65504.0h);`,y=x=>`
      var<workgroup> rowMaxShared : ${g};
      var<workgroup> rowSumShared : ${g};
      var<workgroup> threadShared : array<${g}, ${a}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${g} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${g}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${x.registerUniform("packedCols","i32").declareVariables(u,m)}
      ${x.mainStart()}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${a};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${$}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${g}(${c("threadShared[0]",d)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${g}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${g}(${pt("threadShared[0]",d)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`;return{name:"Softmax",shaderCache:{hint:`${d}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.dataType}],dispatchGroup:{x:l},programUniforms:[{type:6,data:p}]}),getShaderSource:y}},Sh=(e,t)=>{rl(e.inputs),e.compute(il(e.inputs[0],t))},kh=e=>ce({axis:e.axis})}),al,nl,sl,ol,ul,Ih,Eh,bm=M(()=>{Y(),te(),be(),re(),al=e=>{if(!e||e.length<1)throw new Error("too few inputs")},nl=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(a=>r.push(Number(a))),i=r.length),ce({numOutputs:i,axis:t.axis,splitSizes:r})},sl=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${H("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,ol=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let a=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(a):i===0?r.push(`if (output_number == ${i}u) { ${a} }`):i===t-1?r.push(`else { ${a} }`):r.push(`else if (output_number == ${i}) { ${a} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},ul=(e,t)=>{let r=e[0].dims,i=O.size(r),a=e[0].dataType,n=O.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),l=B("input",a,r.length),d=new Array(t.numOutputs),p=[],c=[],u=0,m=[{type:12,data:i}];for(let $=0;$<t.numOutputs;$++){u+=t.splitSizes[$],d[$]=u;let y=r.slice();y[n]=t.splitSizes[$],c.push(y),s[$]=G(`output${$}`,a,y.length),p.push({dims:c[$],dataType:e[0].dataType})}m.push({type:12,data:d},...j(r,...c));let g=$=>`
  ${$.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",d.length).declareVariables(l,...s)}
  ${sl(d.length)}
  ${ol(s)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${l.offsetToIndices("global_idx")};
    var index = ${l.indicesGet("indices",n)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${H("uniforms.size_in_split_axis","output_number - 1u",d.length)};
      ${l.indicesSet("indices",n,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:g,getRunData:()=>({outputs:p,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:m})}},Ih=(e,t)=>{al(e.inputs);let r=e.inputs.length===1?t:nl(e.inputs,t);e.compute(ul(e.inputs,r),{inputs:[0]})},Eh=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes lengh must be equal");return ce({axis:t,numOutputs:i,splitSizes:r})}}),ll,dl,Th,_m=M(()=>{Y(),te(),re(),ll=(e,t,r,i,a)=>{let n=G("output_data",a,r.length,4),s=B("a_data",t[1].dataType,t[1].dims.length,4),l=B("b_data",t[2].dataType,t[2].dims.length,4),d=B("c_data",t[0].dataType,t[0].dims.length,4),p,c=(u,m,g)=>`select(${m}, ${u}, ${g})`;if(!i)p=n.setByOffset("global_idx",c(s.getByOffset("global_idx"),l.getByOffset("global_idx"),d.getByOffset("global_idx")));else{let u=(m,g,$="")=>{let y=`a_data[index_a${g}][component_a${g}]`,x=`b_data[index_b${g}][component_b${g}]`,v=`bool(c_data[index_c${g}] & (0xffu << (component_c${g} * 8)))`;return`
            let output_indices${g} = ${n.offsetToIndices(`global_idx * 4u + ${g}u`)};
            let offset_a${g} = ${s.broadcastedIndicesToOffset(`output_indices${g}`,n)};
            let offset_b${g} = ${l.broadcastedIndicesToOffset(`output_indices${g}`,n)};
            let offset_c${g} = ${d.broadcastedIndicesToOffset(`output_indices${g}`,n)};
            let index_a${g} = offset_a${g} / 4u;
            let index_b${g} = offset_b${g} / 4u;
            let index_c${g} = offset_c${g} / 4u;
            let component_a${g} = offset_a${g} % 4u;
            let component_b${g} = offset_b${g} % 4u;
            let component_c${g} = offset_c${g} % 4u;
            ${m}[${g}] = ${$}(${c(y,x,v)});
          `};a===9?p=`
            var data = vec4<u32>(0);
            ${u("data",0,"u32")}
            ${u("data",1,"u32")}
            ${u("data",2,"u32")}
            ${u("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:p=`
            ${u("output_data[global_idx]",0)}
            ${u("output_data[global_idx]",1)}
            ${u("output_data[global_idx]",2)}
            ${u("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(d,s,l,n)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${p}
      }`},dl=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,a=e[1].dataType,n=!(O.areEqual(t,r)&&O.areEqual(r,i)),s=t,l=O.size(t);if(n){let p=Bt.calcShape(Bt.calcShape(t,r,!1),i,!1);if(!p)throw new Error("Can't perform where op on the given tensors");s=p,l=O.size(s)}let d=Math.ceil(l/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:p=>ll(p,e,s,n,a),getRunData:()=>({outputs:[{dims:s,dataType:a}],dispatchGroup:{x:Math.ceil(l/64/4)},programUniforms:[{type:12,data:d},...j(i,t,r,s)]})}},Th=e=>{e.compute(dl(e.inputs))}}),Ch,vm=M(()=>{Nf(),ba(),Wf(),qf(),Vf(),Hf(),jf(),Kf(),Qf(),Zf(),Jf(),em(),tm(),rm(),im(),am(),nm(),sm(),om(),um(),lm(),Cp(),dm(),Qp(),pm(),hm(),cm(),fm(),wa(),mm(),gm(),ym(),$m(),wm(),bm(),Jp(),Pt(),_a(),_m(),Ch=new Map([["Abs",[Td]],["Acos",[Cd]],["Acosh",[zd]],["Add",[dp]],["ArgMax",[Sd,Zi]],["ArgMin",[xd,Zi]],["Asin",[Ad]],["Asinh",[Od]],["Atan",[Rd]],["Atanh",[Bd]],["Attention",[kd]],["AveragePool",[uh,oh]],["BatchNormalization",[Id]],["BiasAdd",[Ed]],["BiasSplitGelu",[lp]],["Cast",[Md,Dd]],["Ceil",[Ud]],["Clip",[Pd]],["Concat",[bp,_p]],["Conv",[ia,ra]],["ConvTranspose",[Op,Ap]],["Cos",[Nd]],["Cosh",[Wd]],["CumSum",[Rp,Bp]],["DepthToSpace",[Dp,Mp]],["DequantizeLinear",[mh,gh]],["Div",[pp]],["Einsum",[Pp,Up]],["Elu",[qd,Yt]],["Equal",[hp]],["Erf",[Vd]],["Exp",[Hd]],["Expand",[Np]],["FastGelu",[Wp]],["Floor",[jd]],["FusedConv",[ia,ra]],["Gather",[Vp,qp]],["GatherElements",[Fp,Gp]],["GatherBlockQuantized",[Hp,jp]],["Gelu",[Gd]],["Gemm",[Kp,Lp]],["GlobalAveragePool",[dh,lh]],["GlobalMaxPool",[fh,ch]],["Greater",[gp]],["GreaterOrEqual",[$p]],["GroupQueryAttention",[th,eh]],["HardSigmoid",[Jd,Zd]],["InstanceNormalization",[rh]],["LayerNormalization",[ih]],["LeakyRelu",[Fd,Yt]],["Less",[yp]],["LessOrEqual",[wp]],["Log",[op]],["MatMul",[Tp]],["MatMulNBits",[ah,nh]],["MaxPool",[ph,hh]],["Mul",[cp]],["MultiHeadAttention",[Xp,Yp]],["Neg",[Kd]],["Not",[Ld]],["Pad",[sh]],["Pow",[fp]],["QuickGelu",[up,Yt]],["Range",[yh]],["Reciprocal",[Yd]],["ReduceMin",[$d]],["ReduceMean",[cd]],["ReduceMax",[yd]],["ReduceSum",[bd]],["ReduceProd",[wd]],["ReduceL1",[fd]],["ReduceL2",[md]],["ReduceLogSum",[vd]],["ReduceLogSumExp",[gd]],["ReduceSumSquare",[_d]],["Relu",[Xd]],["Resize",[$h,wh]],["RotaryEmbedding",[bh]],["Sigmoid",[Qd]],["Sin",[ep]],["Sinh",[tp]],["Slice",[vh,xh]],["SkipLayerNormalization",[_h]],["Split",[Ih,Eh]],["Sqrt",[rp]],["Softmax",[Sh,kh]],["Sub",[mp]],["Tan",[ip]],["Tanh",[ap]],["ThresholdedRelu",[sp,Yt]],["Tile",[Zp]],["Transpose",[td,rd]],["Where",[Th]]])}),zh,xm=M(()=>{Le(),mt(),re(),zh=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,a){Je(e.programInfo.name);let n=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let p of t)l.push({binding:l.length,resource:{buffer:p.buffer}});for(let p of r)l.push({binding:l.length,resource:{buffer:p.buffer}});a&&l.push({binding:l.length,resource:a});let d=n.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let p={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:d,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(p)}s.setPipeline(e.computePipeline),s.setBindGroup(0,d),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Fe(e.programInfo.name)}dispose(){}build(e,t){Je(e.name);let r=this.backend.device,i=[];r.features.has("shader-f16")&&i.push("enable f16;");let a=ed(t,this.backend.device.limits),n=e.getShaderSource(a),s=`${i.join(`
`)}
${a.additionalImplementations}
${n}`,l=r.createShaderModule({code:s,label:e.name});we("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let d=r.createComputePipeline({compute:{module:l,entryPoint:"main"},layout:"auto",label:e.name});return Fe(e.name),{programInfo:e,computePipeline:d,uniformVariablesInfo:a.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,a=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=a&&r<=a&&i<=a)return[t,r,i];let n=t*r*i,s=Math.ceil(Math.sqrt(n));if(s>a){if(s=Math.ceil(Math.cbrt(n)),s>a)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),pl,hl,cl,Ah,Sm=M(()=>{Le(),Y(),mt(),Mf(),Pf(),vm(),xm(),pl=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let a=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${a}`);break}case"rank":{let n=e[i].dims.length;r.push(`${a};${n}`);break}case"dims":{let n=e[i].dims.join(",");r.push(`${a};${n}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},hl=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${pl(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},cl=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Ah=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r};t.features.has("chromium-experimental-timestamp-query-inside-passes")?r.push("chromium-experimental-timestamp-query-inside-passes"):t.features.has("timestamp-query")&&r.push("timestamp-query"),t.features.has("shader-f16")&&r.push("shader-f16"),this.device=await t.requestDevice(i),this.adapterInfo=new cl(t.info||await t.requestAdapterInfo()),this.gpuDataManager=Xl(this),this.programManager=new zh(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Kl(e.logLevel,!!e.debug),this.device.onuncapturederror=a=>{a.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${a.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Je(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let a=r[i],n=a.kernelId,s=this.kernels.get(n),l=s.kernelType,d=s.kernelName,p=a.programName,c=a.inputTensorViews,u=a.outputTensorViews,m=t[i*2],g=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=m);let $=Number(m-this.queryTimeBase),y=Number(g-this.queryTimeBase);if(!Number.isSafeInteger($)||!Number.isSafeInteger(y))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:c.map(x=>({dims:x.dims,dataType:St(x.dataType)})),outputsMetadata:u.map(x=>({dims:x.dims,dataType:St(x.dataType)})),kernelId:n,kernelType:l,kernelName:d,programName:p,startTime:$,endTime:y});else{let x="";c.forEach((b,S)=>{x+=`input[${S}]: [${b.dims}] | ${St(b.dataType)}, `});let v="";u.forEach((b,S)=>{v+=`output[${S}]: [${b.dims}] | ${St(b.dataType)}, `}),console.log(`[profiling] kernel "${n}|${l}|${d}|${p}" ${x}${v}execution time: ${y-$} ns`)}Er("GPU",`${p}::${m}::${g}`)}e.unmap(),this.pendingQueries.delete(e)}),Fe()}run(e,t,r,i,a,n){Je(e.name);let s=[];for(let b=0;b<t.length;++b){let S=t[b].data;if(S===0)continue;let k=this.gpuDataManager.get(S);if(!k)throw new Error(`no GPU data for input: ${S}`);s.push(k)}let{outputs:l,dispatchGroup:d,programUniforms:p}=e.getRunData(t),c=r.length===0?l.map((b,S)=>S):r;if(c.length!==l.length)throw new Error(`Output size ${c.length} must be equal to ${l.length}.`);let u=[],m=[];for(let b=0;b<l.length;++b){if(!Number.isInteger(c[b])||c[b]<-3||c[b]>=n)throw new Error(`Invalid output index: ${c[b]}`);if(c[b]===-3)continue;let S=c[b]===-1,k=c[b]===-2,E=S||k?a(l[b].dataType,l[b].dims):i(c[b],l[b].dataType,l[b].dims);if(u.push(E),E.data===0)continue;let C=this.gpuDataManager.get(E.data);if(!C)throw new Error(`no GPU data for output: ${E.data}`);if(S&&this.temporaryData.push(C),k){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(C)}m.push(C)}if(s.length!==t.length||m.length!==u.length){if(m.length===0)return Fe(e.name),u;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let g;if(p){let b=0,S=[];p.forEach(z=>{let P=typeof z.data=="number"?[z.data]:z.data;if(P.length===0)return;let q=z.type===10?2:4,W,J;z.type===10?(J=P.length>4?16:P.length>2?8:P.length*q,W=P.length>4?16:q*P.length):(J=P.length<=2?P.length*q:16,W=16),b=Math.ceil(b/J)*J,S.push(b);let Q=z.type===10?8:4;b+=P.length>4?Math.ceil(P.length/Q)*W:P.length*q});let k=16;b=Math.ceil(b/k)*k;let E=new ArrayBuffer(b);p.forEach((z,P)=>{let q=S[P],W=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(E,q,W.length).set(W);else if(z.type===12)new Uint32Array(E,q,W.length).set(W);else if(z.type===10)new Uint16Array(E,q,W.length).set(W);else if(z.type===1)new Float32Array(E,q,W.length).set(W);else throw new Error(`Unsupported uniform type: ${St(z.type)}`)});let C=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(C.buffer,0,E,0,b),this.gpuDataManager.release(C.id),g={offset:0,size:b,buffer:C.buffer}}let $=this.programManager.normalizeDispatchGroupSize(d),y=$[1]===1&&$[2]===1,x=hl(e,t,y),v=this.programManager.getArtifact(x);if(v||(v=this.programManager.build(e,$),this.programManager.setArtifact(x,v),we("info",()=>`[artifact] key: ${x}, programName: ${e.name}`)),p&&v.uniformVariablesInfo){if(p.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${p.length} in program "${v.programInfo.name}".`);for(let b=0;b<p.length;b++){let S=p[b],k=S.type,E=typeof S.data=="number"?1:S.data.length,[C,z]=v.uniformVariablesInfo[b];if(k!==C||E!==z)throw new Error(`Uniform variable ${b} mismatch: expect type ${C} with size ${z}, got type ${k} with size ${E} in program "${v.programInfo.name}".`)}}if(we("info",()=>`[ProgramManager] run "${e.name}" (key=${x}) with ${$[0]}x${$[1]}x${$[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:u};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run(v,s,m,$,g),Fe(e.name),u}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let a=Ch.get(e);if(!a)throw new Error(`kernel not implemented: ${e}`);let n={kernelType:e,kernelName:i,kernelEntry:a[0],attributes:[a[1],r]};this.kernels.set(t,n)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let a=i.kernelType,n=i.kernelName,s=i.kernelEntry,l=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${a}] ${n}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),we("info",()=>`[WebGPU] Start to run kernel "[${a}] ${n}"...`);let d=this.env.debug;this.temporaryData=[];try{return d&&this.device.pushErrorScope("validation"),s(t,l[1]),0}catch(p){return r.push(Promise.resolve(`[WebGPU] Kernel "[${a}] ${n}" failed. ${p}`)),1}finally{d&&r.push(this.device.popErrorScope().then(p=>p?`GPU validation error for kernel "[${a}] ${n}": ${p.message}`:null));for(let p of this.temporaryData)this.gpuDataManager.release(p.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let a=this.sessionExternalDataMapping.get(e);a||(a=new Map,this.sessionExternalDataMapping.set(e,a));let n=a.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,n?.[1]);return a.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[1])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await Xi(this,e,t);return Yl(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){we("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){we("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){we("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let a=this.getComputePassEncoder(),n=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),a.setPipeline(n.computePipeline),a.setBindGroup(0,n.bindGroup),a.dispatchWorkgroups(...n.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Oh={};Jt(Oh,{init:()=>Rh});var _r,fl,Rh,km=M(()=>{Y(),Sm(),mt(),te(),_r=class Bh{constructor(t,r,i,a){this.module=t,this.dataType=r,this.data=i,this.dims=a}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(O.size(t)!==O.size(this.dims))throw new Error("Invalid new shape");return new Bh(this.module,this.dataType,this.data,t)}},fl=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.HEAPU32,a=r>>>2;this.opKernelContext=i[a++];let n=i[a++];this.outputCount=i[a++],this.customDataOffset=i[a++],this.customDataSize=i[a++];let s=[];for(let l=0;l<n;l++){let d=i[a++],p=i[a++],c=i[a++],u=[];for(let m=0;m<c;m++)u.push(i[a++]);s.push(new _r(e,d,p,u))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}getMaxComputeWorkgroupSizes(){return[this.backend.device.limits.maxComputeWorkgroupSizeX,this.backend.device.limits.maxComputeWorkgroupSizeY,this.backend.device.limits.maxComputeWorkgroupSizeZ]}getMaxComputeWorkgroupStoragesize(){return this.backend.device.limits.maxComputeWorkgroupStorageSize}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],a=(s,l,d)=>new _r(this.module,l,this.output(s,d),d),n=(s,l)=>{let d=Cr(s,l);if(!d)throw new Error(`Unsupported data type: ${s}`);let p=d>0?this.backend.gpuDataManager.create(d).id:0;return new _r(this.module,s,p,l)};return this.backend.run(e,r,i,a,n,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.stackAlloc((1+t.length)*4),a=i>>2;this.module.HEAPU32[a++]=t.length;for(let n=0;n<t.length;n++)this.module.HEAPU32[a++]=t[n];return this.module._JsepOutput(this.opKernelContext,e,i)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Rh=async(e,t,r,i)=>{let a=t.jsepInit;if(!a)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let n=new Ah;await n.initialize(r,i),a("webgpu",[n,s=>n.alloc(s),s=>n.free(s),(s,l,d,p=!1)=>{if(p)we("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${s}, dst=${l}, size=${d}`),n.memcpy(s,l);else{we("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${s}, gpuDataId=${l}, size=${d}`);let c=t.HEAPU8.subarray(s>>>0,(s>>>0)+d);n.upload(l,c)}},async(s,l,d)=>{we("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${l}, size=${d}`),await n.download(s,()=>t.HEAPU8.subarray(l>>>0,(l>>>0)+d))},(s,l,d)=>n.createKernel(s,l,d,t.UTF8ToString(t._JsepGetNodeName(l))),s=>n.releaseKernel(s),(s,l,d,p)=>{we("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${s}, contextDataOffset=${l}`);let c=new fl(t,n,l);return n.computeKernel(s,c,p)},()=>n.captureBegin(),()=>n.captureEnd(),()=>n.replay()])}else a("webnn")}}),ml,Ia,Ea,lt,gl,Dr,Ta,Ca,Gi,za,Aa,Oa,Dh=M(()=>{Bf(),Df(),Y(),Mt(),ca(),Ll(),ml=(e,t)=>{Se()._OrtInit(e,t)!==0&&$e("Can't initialize onnxruntime.")},Ia=async e=>{ml(e.wasm.numThreads,zr(e.logLevel))},Ea=async(e,t)=>{{let r=(km(),Ir(Oh)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let i=e.webgpu.adapter;if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let a=e.webgpu.powerPreference;if(a!==void 0&&a!=="low-power"&&a!=="high-performance")throw new Error(`Invalid powerPreference setting: "${a}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:a,forceFallbackAdapter:n}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await r("webgpu",Se(),e,i)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await r("webnn",Se(),e)}}},lt=new Map,gl=e=>{let t=Se(),r=t.stackSave();try{let i=t.stackAlloc(8);return t._OrtGetInputOutputCount(e,i,i+4)!==0&&$e("Can't get session input/output count."),[t.HEAP32[i/4],t.HEAP32[i/4+1]]}finally{t.stackRestore(r)}},Dr=e=>{let t=Se(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Ta=async(e,t)=>{let r,i,a=Se();Array.isArray(e)?[r,i]=e:e.buffer===a.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=Dr(e);let n=0,s=0,l=0,d=[],p=[],c=[];try{if([s,d]=Fl(t),t?.externalData&&a.mountExternalData){let b=[];for(let S of t.externalData){let k=typeof S=="string"?S:S.path;b.push(ga(typeof S=="string"?S:S.data).then(E=>{a.mountExternalData(k,E)}))}await Promise.all(b)}for(let b of t?.executionProviders??[])if((typeof b=="string"?b:b.name)==="webnn"){if(a.currentContext)throw new Error("WebNN execution provider is already set.");if(typeof b!="string"){let S=b,k=S?.context,E=S?.gpuDevice,C=S?.deviceType,z=S?.numThreads,P=S?.powerPreference;k?a.currentContext=k:E?a.currentContext=await navigator.ml.createContext(E):a.currentContext=await navigator.ml.createContext({deviceType:C,numThreads:z,powerPreference:P})}else a.currentContext=await navigator.ml.createContext();break}n=await a._OrtCreateSession(r,i,s),n===0&&$e("Can't create a session."),a.currentContext&&(a.currentContext=void 0);let[u,m]=gl(n),g=!!t?.enableGraphCapture,$=[],y=[],x=[];for(let b=0;b<u;b++){let S=a._OrtGetInputName(n,b);S===0&&$e("Can't get an input name."),p.push(S),$.push(a.UTF8ToString(S))}for(let b=0;b<m;b++){let S=a._OrtGetOutputName(n,b);S===0&&$e("Can't get an output name."),c.push(S);let k=a.UTF8ToString(S);y.push(k);{if(g&&t?.preferredOutputLocation===void 0){x.push("gpu-buffer");continue}let E=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[k]??"cpu";if(E!=="cpu"&&E!=="cpu-pinned"&&E!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${E}.`);if(g&&E!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${E}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);x.push(E)}}let v=null;return x.some(b=>b==="gpu-buffer")&&(l=a._OrtCreateBinding(n),l===0&&$e("Can't create IO binding."),v={handle:l,outputPreferredLocations:x,outputPreferredLocationsEncoded:x.map(b=>Yi(b))}),lt.set(n,[n,p,c,v,g,!1]),[n,$,y]}catch(u){throw p.forEach(m=>a._OrtFree(m)),c.forEach(m=>a._OrtFree(m)),l!==0&&a._OrtReleaseBinding(l),n!==0&&a._OrtReleaseSession(n),u}finally{a._free(r),s!==0&&a._OrtReleaseSessionOptions(s),d.forEach(u=>a._free(u)),a.unmountExternalData?.()}},Ca=e=>{let t=Se(),r=lt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,a,n,s,l]=r;s&&(l&&t._OrtClearBoundOutputs(s.handle),t._OrtReleaseBinding(s.handle)),t.jsepOnReleaseSession?.(e),a.forEach(d=>t._OrtFree(d)),n.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(i),lt.delete(e)},Gi=(e,t,r,i,a,n=!1)=>{if(!e){t.push(0);return}let s=Se(),l=e[0],d=e[1],p=e[3],c,u;if(l==="string"&&p==="gpu-buffer")throw new Error("String tensor is not supported on GPU.");if(n&&p!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(p==="gpu-buffer"){let $=e[2].gpuBuffer;u=Cr(Ki(l),d);let y=s.jsepRegisterBuffer;if(!y)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');c=y(i,a,$,u)}else{let $=e[2];if(Array.isArray($)){u=4*$.length,c=s._malloc(u),r.push(c);let y=c/4;for(let x=0;x<$.length;x++){if(typeof $[x]!="string")throw new TypeError(`tensor data at index ${x} is not a string`);s.HEAPU32[y++]=Ie($[x],r)}}else u=$.byteLength,c=s._malloc(u),r.push(c),s.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,u),c)}let m=s.stackSave(),g=s.stackAlloc(4*d.length);try{let $=g/4;d.forEach(x=>s.HEAP32[$++]=x);let y=s._OrtCreateTensor(Ki(l),c,u,g,d.length,Yi(p));y===0&&$e(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push(y)}finally{s.stackRestore(m)}},za=async(e,t,r,i,a,n)=>{let s=Se(),l=lt.get(e);if(!l)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=l[0],p=l[1],c=l[2],u=l[3],m=l[4],g=l[5],$=t.length,y=i.length,x=0,v=[],b=[],S=[],k=[],E=s.stackSave(),C=s.stackAlloc($*4),z=s.stackAlloc($*4),P=s.stackAlloc(y*4),q=s.stackAlloc(y*4);try{[x,v]=Gl(n);for(let K=0;K<$;K++)Gi(r[K],b,k,e,t[K],m);for(let K=0;K<y;K++)Gi(a[K],S,k,e,$+i[K],m);let W=C/4,J=z/4,Q=P/4,ae=q/4;for(let K=0;K<$;K++)s.HEAPU32[W++]=b[K],s.HEAPU32[J++]=p[t[K]];for(let K=0;K<y;K++)s.HEAPU32[Q++]=S[K],s.HEAPU32[ae++]=c[i[K]];if(u&&!g){let{handle:K,outputPreferredLocations:oe,outputPreferredLocationsEncoded:pe}=u;if(p.length!==$)throw new Error(`input count from feeds (${$}) is expected to be always equal to model's input count (${p.length}).`);for(let X=0;X<$;X++){let ne=t[X];await s._OrtBindInput(K,p[ne],b[X])!==0&&$e(`Can't bind input[${X}] for session=${e}.`)}for(let X=0;X<y;X++){let ne=i[X];a[X]?.[3]?s._OrtBindOutput(K,c[ne],S[X],0)!==0&&$e(`Can't bind pre-allocated output[${X}] for session=${e}.`):s._OrtBindOutput(K,c[ne],0,pe[ne])!==0&&$e(`Can't bind output[${X}] to ${oe[X]} for session=${e}.`)}lt.set(e,[d,p,c,u,m,!0])}s.jsepOnRunStart?.(d);let se;u?se=await s._OrtRunWithBinding(d,u.handle,y,P,x):se=await s._OrtRun(d,z,C,$,q,y,P,x),se!==0&&$e("failed to call OrtRun().");let ie=[];for(let K=0;K<y;K++){let oe=s.HEAPU32[P/4+K];if(oe===S[K]){ie.push(a[K]);continue}let pe=s.stackSave(),X=s.stackAlloc(4*4),ne=!1,R,U=0;try{s._OrtGetTensorData(oe,X,X+4,X+8,X+12)!==0&&$e(`Can't access output tensor data on index ${K}.`);let ee=X/4,fe=s.HEAPU32[ee++];U=s.HEAPU32[ee++];let me=s.HEAPU32[ee++],Be=s.HEAPU32[ee++],Ne=[];for(let Ee=0;Ee<Be;Ee++)Ne.push(s.HEAPU32[me/4+Ee]);s._OrtFree(me);let Re=Ne.reduce((Ee,ke)=>Ee*ke,1);R=St(fe);let Ae=u?.outputPreferredLocations[i[K]];if(R==="string"){if(Ae==="gpu-buffer")throw new Error("String tensor is not supported on GPU.");let Ee=[],ke=U/4;for(let rt=0;rt<Re;rt++){let it=s.HEAPU32[ke++],yt=rt===Re-1?void 0:s.HEAPU32[ke]-it;Ee.push(s.UTF8ToString(it,yt))}ie.push([R,Ne,Ee,"cpu"])}else if(Ae==="gpu-buffer"&&Re>0){let Ee=s.jsepGetBuffer;if(!Ee)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let ke=Ee(U),rt=Cr(fe,Re);if(rt===void 0||!ma(R))throw new Error(`Unsupported data type: ${R}`);ne=!0,ie.push([R,Ne,{gpuBuffer:ke,download:s.jsepCreateDownloader(ke,rt,R),dispose:()=>{s._OrtReleaseTensor(oe)}},"gpu-buffer"])}else{let Ee=fa(R),ke=new Ee(Re);new Uint8Array(ke.buffer,ke.byteOffset,ke.byteLength).set(s.HEAPU8.subarray(U,U+ke.byteLength)),ie.push([R,Ne,ke,"cpu"])}}finally{s.stackRestore(pe),R==="string"&&U&&s._free(U),ne||s._OrtReleaseTensor(oe)}}return u&&!m&&(s._OrtClearBoundOutputs(u.handle),lt.set(e,[d,p,c,u,m,!1])),ie}finally{s.stackRestore(E),b.forEach(W=>s._OrtReleaseTensor(W)),S.forEach(W=>s._OrtReleaseTensor(W)),k.forEach(W=>s._free(W)),x!==0&&s._OrtReleaseRunOptions(x),v.forEach(W=>s._free(W))}},Aa=e=>{let t=Se(),r=lt.get(e);if(!r)throw new Error("invalid session id");let i=r[0],a=t._OrtEndProfiling(i);a===0&&$e("Can't get an profile file name."),t._OrtFree(a)},Oa=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),dt,Pe,zt,Gt,Ft,vr,Fi,xr,_t,vt,yl,Mh,Ph,Uh,Nh,Wh,qh,Vh,Hh=M(()=>{Le(),Dh(),Mt(),Mr(),dt=()=>!!ge.wasm.proxy&&typeof document<"u",zt=!1,Gt=!1,Ft=!1,xr=new Map,_t=(e,t)=>{let r=xr.get(e);r?r.push(t):xr.set(e,[t])},vt=()=>{if(zt||!Gt||Ft||!Pe)throw new Error("worker not ready")},yl=e=>{switch(e.data.type){case"init-wasm":zt=!1,e.data.err?(Ft=!0,Fi[1](e.data.err)):(Gt=!0,Fi[0]()),vr&&(URL.revokeObjectURL(vr),vr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=xr.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Mh=async()=>{if(!Gt){if(zt)throw new Error("multiple calls to 'initWasm()' detected.");if(Ft)throw new Error("previous call to 'initWasm()' failed.");if(zt=!0,dt())return new Promise((e,t)=>{Pe?.terminate(),Hl().then(([r,i])=>{try{Pe=i,Pe.onerror=n=>t(n),Pe.onmessage=yl,Fi=[e,t];let a={type:"init-wasm",in:ge};Pe.postMessage(a),vr=r}catch(a){t(a)}},t)});try{await ha(ge.wasm),await Ia(ge),Gt=!0}catch(e){throw Ft=!0,e}finally{zt=!1}}},Ph=async e=>{if(dt())return vt(),new Promise((t,r)=>{_t("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:ge}};Pe.postMessage(i)});await Ea(ge,e)},Uh=async e=>dt()?(vt(),new Promise((t,r)=>{_t("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Pe.postMessage(i,[e.buffer])})):Dr(e),Nh=async(e,t)=>{if(dt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return vt(),new Promise((r,i)=>{_t("create",[r,i]);let a={type:"create",in:{model:e,options:{...t}}},n=[];e instanceof Uint8Array&&n.push(e.buffer),Pe.postMessage(a,n)})}else return Ta(e,t)},Wh=async e=>{if(dt())return vt(),new Promise((t,r)=>{_t("release",[t,r]);let i={type:"release",in:e};Pe.postMessage(i)});Ca(e)},qh=async(e,t,r,i,a,n)=>{if(dt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(a.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return vt(),new Promise((s,l)=>{_t("run",[s,l]);let d=r,p={type:"run",in:{sessionId:e,inputIndices:t,inputs:d,outputIndices:i,options:n}};Pe.postMessage(p,Oa(d))})}else return za(e,t,r,i,a,n)},Vh=async e=>{if(dt())return vt(),new Promise((t,r)=>{_t("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Pe.postMessage(i)});Aa(e)}}),Li,$l,jh,Im=M(()=>{Le(),Hh(),Y(),pa(),Ll(),Li=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},$l=e=>{switch(e[3]){case"cpu":return new Oe(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!ma(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:a}=e[2];return Oe.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:a})}default:throw new Error(`invalid data location: ${e[3]}`)}},jh=class{async fetchModelAndCopyToWasmMemory(e){return Uh(await ga(e))}async loadModel(e,t){Je();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames]=await Nh(r,t),Fe()}async dispose(){return Wh(this.sessionId)}async run(e,t,r){Je();let i=[],a=[];Object.entries(e).forEach(u=>{let m=u[0],g=u[1],$=this.inputNames.indexOf(m);if($===-1)throw new Error(`invalid input '${m}'`);i.push(g),a.push($)});let n=[],s=[];Object.entries(t).forEach(u=>{let m=u[0],g=u[1],$=this.outputNames.indexOf(m);if($===-1)throw new Error(`invalid output '${m}'`);n.push(g),s.push($)});let l=i.map((u,m)=>Li(u,()=>`input "${this.inputNames[a[m]]}"`)),d=n.map((u,m)=>u?Li(u,()=>`output "${this.outputNames[s[m]]}"`):null),p=await qh(this.sessionId,a,l,s,d,r),c={};for(let u=0;u<p.length;u++)c[this.outputNames[s[u]]]=n[u]??$l(p[u]);return Fe(),c}startProfiling(){}endProfiling(){Vh(this.sessionId)}}}),wl,Gh,Em=M(()=>{Le(),Hh(),Im(),Mr(),wl=()=>{if((typeof ge.wasm.initTimeout!="number"||ge.wasm.initTimeout<0)&&(ge.wasm.initTimeout=0),ge.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof ge.wasm.proxy!="boolean"&&(ge.wasm.proxy=!1),typeof ge.wasm.trace!="boolean"&&(ge.wasm.trace=!1),typeof ge.wasm.numThreads!="number"||!Number.isInteger(ge.wasm.numThreads)||ge.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ge.wasm.numThreads=1;else{let e=typeof navigator>"u"?mf("node:os").cpus().length:navigator.hardwareConcurrency;ge.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Gh=class{async init(e){wl(),await Mh(),await Ph(e)}async createInferenceSessionHandler(e,t){let r=new jh;return await r.loadModel(e,t),Promise.resolve(r)}}}),Fh={};Jt(Fh,{wasmBackend:()=>Lh});var Lh,Tm=M(()=>{Em(),Lh=new Gh});Le();Le();Le();var Cm="1.20.0",zm=Ul;{let e=(Tm(),Ir(Fh)).wasmBackend;Ot("webgpu",e,5),Ot("webnn",e,5),Ot("cpu",e,10),Ot("wasm",e,10)}Object.defineProperty(ge.versions,"web",{value:Cm,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */export{Oe as O,ge as b,zm as x};
